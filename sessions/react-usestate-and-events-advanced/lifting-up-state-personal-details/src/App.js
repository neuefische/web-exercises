/**
In your Form component, there are two states, "name" and "email",
which are set via a form submit.
But we want to use the states somewhere else in our App, namely we
want to display them inside our App.js under "Your details." For that we
need to lift up both states.

1. Lift up both states from your Form to your App component and replace the
   variables name and email with them.
2. In your App.js, write a function createUser(name, email)
   where you call the set functions of both states to update them.
3. Pass createUser() as an `onCreateUser` prop to your Form component.
   Make sure to accept `onCreateUser` in your Form as well.
4. Inside the Form's handleSubmit(), replace setName() and setEmail()
   with your newly accepted prop `onCreateUser()`.
   Make sure to pass the correct values to this function.

Now our App works as expected, but you get the task to refactor the code
a second time. Outsource the display of the personal details in a new component:

 1. Create a new file "DetailsDisplay.js" and inside it write a component with the same name.
 2. Move the jsx elements regarding the personal details display into that component.
 3. Import and include the component in your App.js.
 4. Pass down the states as props called "name" and "email". Don't forget to
    accept the props inside your component.

Now we can use the values we get as inputs also in other components. Amazing!
 */

import './styles.css';
import Form from './Form';

export default function App() {
	const name = '???';
	const email = '???';

	return (
		<div className="App">
			<h1>useState and Events</h1>
			<Form />
			<h2>Your details:</h2>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
		</div>
	);
}
