# CRUD Recap

In this Recap, you will collaborate to build the entire frontend of the TOURIO App.

**In this project you will focus exclusicely on state handling in your application. (Meaning displaying, adding, updating and removing data from your state)**

This project will be completed in groups. Setup the project, then, invite the rest of your group members as collaborators to this project.

As is standard practice, each feature should be developed on a separate branch.

### 1. Display Data

#### Tasks

- **State Initialization with Dummy Data**

  - In your `index.js` file located in the `/pages` directory, import the `initialPlaces` array from `@/lib/db.js`.
  - Initialize a state variable to hold this dummy data. You can use React's `useState` hook for state management.

- **Displaying Data**

  - Map over the state that contains your `initialPlaces` data to render the list of places on the homepage.
  - For each place, you should temporarily display its `name` and `location` properties directly within your map function. This will be replaced by a card component in the following steps.

- **Create a Card Component**

  - Create a new component named `PlaceCard` in a suitable directory (e.g., `components/PlaceCard.js`).
  - This component should accept props for a place's `image`, `name`, and `location`.
  - Feel free to style the component using styled components. (Basic styling is sufficient)

- **Integrate the Card Component**

  - Replace the temporary display of place details within your map function in `index.js` with the `PlaceCard` component.
  - Pass the necessary data (`image`, `name`, and `location`) as props to each `PlaceCard` instance.

- **Whitelisting Image URLs**

  - If not already done so, modify the `PlaceCard` component to use the `Image` component from Next.js for displaying the images. Ensure that you configure your Next.js project to allow images from the URLs you are using by editing the `next.config.js` file and adding the image domains to the `images.domains` array.

### 2. Add new Places

- **Create a New Page for Adding Entries**

  - Add a new file named `create.js` within the `/pages` directory.
  - This page will host a form that allows users to add new entries to your application.
  - Add a link within the page that allows users to navigate back to the homepage.

- **Form Component for New Entries**

  - Create a form component that includes fields for `name`, `location`, `mapURL`, `image`, and `description`. You can structure this component in a directory like `components/Form.js`.
  - Include a submit button in the form.
  - Basic styling is sufficient.

- **Move State to `_app.js`**

  - To share state across different pages, move the state management for your places (initially in `/pages/index.js`) to `_app.js`. This will make the state accessible throughout your application.

- **Implement the `handleAddPlace` Function**

  - In your `_app.js` write a function named `handleAddPlace` that will be responsible for adding a new place to the state.
  - This function should accept the form data as an argument, generate a unique ID for the new entry using `uuid`, and then add the new place to the existing state.

- **State and Handler Propagation**

  - Ensure the shared state and the `handleAddPlace` function are properly passed down to the pages and components that require them.
  - In `create.js`, use these props to manage the form submission and to maintain the list of places.

- **Form Submission and Page Redirection**

  - Upon form submission, use the `handleAddPlace` function to add the new entry to your state.
  - After adding the entry, redirect the user to the homepage. This can be achieved by importing `useRouter` from `next/router` and calling `router.push('/')` after the form submission logic.

- Link to create page
  - in `/pages/index.js` add a Link that forwards users to `/pages/create.js`
  - this link should always be visible

### 3. Implement Detail View for Places

- **Create a Dynamic Route for Place Details**

  - Create a directory `places` inside the `/pages` directory
  - In the `/pages/places` directory, create a dynamic route named `[id]/index.js`. This file will serve as the detail page for each place.

- **Display Place Information**

  - Inside your detail page component (`[id]/index.js`), use Next.js's `useRouter` hook to access the router object and retrieve the `id` of the current place from the URL.
  - Use this `id` to find the corresponding place from your application's state using the `.find()` method.
  - Display the detailed information of the found place, such as its `name`, `location`, `imageURL`, `mapURL`, and `description`.

- **Implement a Back Link**

  - Include a link on the detail page that, when clicked, redirects the user back to the homepage (`/pages/index.js`).

- **Add Links to the Homepage for Detail Views**

  - Modify your homepage (`/pages/index.js`) to include links for each place entry that direct the user to the detail view of that place.
  - These links should route to `/places/[id]`, with `[id]` replaced by the actual ID of the place. You can use Next.js's `Link` component for this purpose.

### 4. Delete Places

- **Implement `handleDeletePlace` Function in `_app.js`**

  - In the `_app.js` file, write a function named `handleDeletePlace` that updates the state to remove an entry based on its `id`.
  - This function takes the `id` of the place to be deleted as a parameter.

- **Pass the Delete Function to Pages**

  - Make sure the `handleDeletePlace` function is passed down as a prop to all pages that need it.

- **Add Delete Button in Place Detail Page**

  - In the detail page component for places (`/pages/places/[id]/index.js`), add a button that, when clicked, calls the `handleDeletePlace` function with the place's `id` as the argument.
  - This button allows users to delete the place they are currently viewing.

- **Redirect to Homepage After Deletion**

  - After successfully deleting a place, use Next.js's `useRouter` hook to redirect the user back to the homepage.
  - Perform the redirection by calling `router.push('/')` after the state has been updated.

### 5. Edit Places

- **Create Edit Page for Places**

  - Add a new file under `/pages/places/[id]/edit.js`. This file will be responsible for rendering the edit form for a specific place, identified by its `id`.

- **Display Pre-filled Form**

  - In the edit page component, use Next.js's `useRouter` hook to extract the `id` of the place from the URL.
  - Use this `id` to find the current data of the place from your application's state and pre-fill the form fields with this data. The `defaultValue` attribute of form elements can be useful here.
  - Consider creating a separate component for the form to keep your code organized and reusable.

- **Implement the `handleEditPlace` Function in `_app.js`**

  - Define a function named `handleEditPlace` in `_app.js` that takes the updated place data and its `id` as arguments. This function should update the state by replacing the old place data with the new, updated data.
  - Utilize array manipulation methods, like `.map()`, to achieve this, ensuring that only the place with the matching `id` is updated.

- **Handle Form Submission**

  - On form submission, prevent the default form action and call the `handleEditPlace` function with the updated place data and its `id`.
  - Ensure that the form gathers all necessary data to fully update the place's entry in the state.

- **Redirect to Homepage After Submission**

  - After successfully updating the place's data, use Next.js's `useRouter` hook to redirect the user back to the homepage.

### 6. Refactor

- **Refactor to Use a Single Form Component**

  - Create a single form component that can be used for both adding a new place and editing an existing place. This component should be designed to handle the inputs required for a place, such as name, location, mapURL, imageURL, and description.

- **Pass a `formName` Prop to Identify the Form**

  - Enhance the form component to accept a `formName` prop, which will be used to differentiate between the "create" and "edit" scenarios. Use this prop to conditionally render the form's heading and submit button text (e.g., "Add Place" for create and "Update Place" for edit).

- **Conditional Default Values Using Optional Chaining**

  - Utilize optional chaining (`?.`) to make the `defaultValue` of form inputs conditional, based on whether the form is being used to edit an existing place. This allows for the inputs to be pre-filled when editing, while being empty for new entries.

- **Make the `handleSubmit` Function Generic**

  - Design the `handleSubmit` function to be generic and adaptable to both creating and updating place data. This function should decide whether to add a new place or update an existing one based on the presence of an `id` or any other distinguishing prop passed to the form.

- **Ensure Proper Props are Passed in Usage**

  - When calling your form component within `/pages/create` and `/pages/places/[id]/edit.js`, ensure that the correct props are passed. This includes the `formName`, any necessary default values for editing, and a generic `handleSubmit` function tailored to the context.
