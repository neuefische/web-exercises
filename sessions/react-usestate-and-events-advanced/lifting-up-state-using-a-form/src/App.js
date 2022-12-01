/**
 * In your App component, there are two states, "name" and "email",
 * which are set via a form submit.
 * The content of both states are rendered below the form (see "Your details").

1. Create a new file, "Form.js", and write a Form component.
2. Put the relevant code from the App component into the Form component.
Make sure to also cut and paste the states as well as the handleSubmit() function.
3. Import the Form component into your App.js
and implement it into your return statement.
   You should now have an error regarding these lines:

```
<p>Name: {name}</p>
<p>Email: {email}</p>
```

In your App.js, `name`and `email` are not defined,
because their states now only live inside the Form component.

4. Comment out `{name}` and `{email}` for the moment.
5. Lift up both states from your Form to your App component.
6. In your App.js, write a function createUser(name, email)
where you call the set functions of both states to update them.
7. Pass createUser as an `onCreateUser` prop to your Form component.
Make sure to accept `onCreateUser` in your Form as well.
8. Inside the Form's handleSubmit(), replace setName() and setEmail()
with your newly accepted prop `onCreateUser()`.
Make sure to pass the correct values to this function.
 */

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name, email } = form.elements;
    setName(name.value);
    setEmail(email.value);
    form.reset();
  }

  return (
    <div className="app">
      <h1>useState and Events</h1>
      <form aria-labelledby="user" onSubmit={handleSubmit}>
        <h2 id="user">Form with useState</h2>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" placeholder="John Doe" />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" placeholder="john@doe.com" />
        <button>Submit</button>
      </form>
      <h2>Your details:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
