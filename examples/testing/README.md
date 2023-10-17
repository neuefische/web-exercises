# Testing

**Software testing** is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation.

Testing cannot guarantee the **absence of failure**, but aims at _minimising_ it nevertheless.

## Types of test

There are various ways of testing an application. They behave in synergy and check various aspects of the code.

| Type of testing      | What it targets                          | What it does                                                                                    |
|----------------------|------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Unit test**        | single functions, React components       | Checks the behaviour of the target in isolation, without interaction with other components      |
| **Integration test** | composition of components, API endpoints | Checks that different parts of the application work well together                               |
| **End to end test**  | whole app processes                      | Checks that the app works as the final user intends to use it, without any technical assumption |

## How to test

Tests can be **manual** or **automatic**. To manually test a function for instance, one should call it with various sets of arguments, and see that the behaviour is the expected one:

```js
function add(a, b = 0) {
  return a + b;
}

console.log(add(2, 3)); // logs 5 - fine
console.log(add(3, 2)); // logs 5 - fine
console.log(add(2, 0)); // logs 2 - fine
console.log(add(2));    // logs 2 - fine
```

On the long run, this would be very impractical, so we wrote tools that **automate** this process.

### Unit tests

```js
import { describe, it, expect } from "vitest";
import { add } from './utils.js';

describe('add', () => {
  it('should be commutative', () => {
    expect(add(2, 3)).toBe(add(3, 2));
  });
  it('should have an identity element', () => {
    expect(add(2, 0)).toBe(2);
  });
  it('should default the second argument to the identity element if not passed', () => {
    expect(add(2)).toBe(2);
  });
})
```

Running `npm run test` in the terminal will produce a report of the tests contained in the project.

The tests above are called **unit tests**, because they check the behaviour of the `add` function in isolation, without any further interaction.

### Integration tests

Things may work on their own, but break when used in conjunction with other entities.

![Integration vs Unit tests](https://assets.cdn.prod.twilio.com/images/MyR86UeunZJcErQJmlEoEwWpAt56uIH2k2mHFqfsA95S2R.width-500_NbXJ1BV.png)

Let's consider a `POST /api/users` endpoint like the following:

```js
import User from '@/db/models/User';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      const user = await User.create(request.body);
      response.status(201).json(user);
    } catch(error) {
      response.status(500).error({ message: 'Error creating user' });
    }
  }
  request.status(405).json({ message: 'Method Not Allowed '});
}
```

The expectation is that a new user with the passed information is created after making the request.

Without going into implementation details (since they would involve more tools that just Jest), the following steps will be followed:

- a `fetch` request with method `POST` and some JSON body info corresponding to the mongoose model (e.g. first name, last name, e-mail) is sent;
- the response status is expected to be 201;
- the response body is expected to contain the just created user as JSON;
- querying the DB for an user with the `_id` in the response yields the corresponding user.

We are testing the behaviour of the HTTP server combined with the DB, hence _integration test_.

Observe how the code above has various branches (a `try...catch` and an `if` statement). All those should be tested in the HTTP protocol sense, e.g. making a DELETE /api/users should be answered with a 405.

A good practice is to use a clean database for every test run, so that there are no intermissions from previous operations. [There are specific testing tools](https://github.com/nodkz/mongodb-memory-server) that save you from using a real mongodb instance for this purpose.

**Note**: being comfortable writing and maintaining integration tests goes beyond the duties of a junior web developer (that's why you should stop being a junior as soon as possible, it's fun to write tests!).

### Integration tests in React

It's relatively less common to have integration tests in React, but any time that you are testing something in a provider context (e.g. React Router, SWR, custom hooks) you are actually integrating multiple stuff.

### Mocking / Stubbing things

Sometimes we want to test if something work, but it relies on the existence of something else. Without going too much in detail, one can fake the existence of the needed entities with various techniques.

Let's see the following component:

- it should render the passed `label`;
- it should render the confirm dialog with the passed `dialogText` when clicked;
- if the OK button is clicked, the passed `onConfirm` function should be called;
- else, the `onCancel` function should be called.

```js
export default function ConfirmButton({
  label,
  dialogText,
  onConfirm,
  onCancel,
}) {
  function onClick() {
    if (!window.confirm(dialogText)) {
      onCancel();
      return;
    }
    onConfirm();
  }
  return <button onClick={onClick}>{label}</button>;
}
```

The label part is easy to test, but what about the confirm button? Surely we cannot click a popup during an automated test! Sure, but we can _pretend_ to have clicked it, since `window.confirm` will return `true` or `false` depending on which button the user clicked.

```js
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ConfirmButton from "./ConfirmButton";

describe("ConfirmButton", () => {
  it("calls the onConfirm function when the OK button is pressed", () => {

    // with vi.spyOn, we replace the window.confirm function...
    const confirmSpy = vi.spyOn(window, "confirm");
    // with our own implementation! we'll return always true for now,
    // simulating the OK case
    confirmSpy.mockImplementation(vi.fn(() => true));

    // with vi.fn() on the other hand, we generate a placeholder function
    // whose only purpose is to report if it's been called
    const onConfirm = vi.fn();
    render(
      <ConfirmButton
        label="Delete"
        dialogText="Are you sure?"
        onConfirm={onConfirm}
      />
    );
    screen.queryByText("Delete").click();
    // expectation met!
    expect(onConfirm).toHaveBeenCalled();

    // let's put window.confirm back to its original form, should it be needed by any other test
    confirmSpy.mockRestore();
  });
});
```

For the `onCancel` case, one has to mock `window.confirm` again, but this time by always returning `false`:

```js
it("calls the onCancel function when the Cancel button is pressed", () => {
  //...
  confirmSpy.mockImplementation(vi.fn(() => false))
  const onCancel = vi.fn();
  render(
    <ConfirmButton
      label="Delete"
      dialogText="Are you sure?"
      onCancel={onCancel}
    />
  );
  screen.queryByText("Delete").click();
  expect(onCancel).toHaveBeenCalled();  
});
```

In testing terms we say that:

- we **mocked** the `window.confirm` function, read: we provided our custom implementation for testing purposes.
- we **stubbed** the `onConfirm` and `onCancel` prop functions.

In software testing, test stubs are programs that simulate the behaviours of software components (or modules) that a module undergoing tests depends on. In this case, we passed a dummy function that is doing nothing more than...existing, and reporting that it's been called.

### End to end tests

The goal of testing is to make sure an application works as intended by the final user. The figure of the **manual tester** became more and more replaced by automated tools like [Cypress.io](https://www.cypress.io/) that can be integrated in existing Continuos Integration workflows.

They require non trivial knowledge and time to be implemented, and need a somehow already established platform, so they can be added at a later stage (before app release of course).


## Is testing an optional activity?

Short answer: no.

Medium answer: no, think vehicles, planes, medicines.

Long answer: testing is vital for a quality product, as it grants various benefits:

- written knowledge of the app even if core team members leave;
- guarantees that contributions from new members that are unaware of the app issues, won't break it;
- allows to test multiple use cases as they are developed, without the need of going through manual browser processes (think a backend team that should develop an API while the frontend is not there yet).

This means that writing tests should be taken into consideration at **estimation time**.

## How much of the software should be tested?

Short answer: the exact amount it is needed.

Long answer: trivial thing might not be tested (e.g. a React component that is just wrapping a spinner .gif). But processes like login, registration, cart checkout, sending notifications are the core value of the app, and if broken no user would like to use your product again ($$$).

Concepts like the **critical path** of registration or onboarding should then have 100% coverage at every possible level, while less crucial features can allow for more flexibility.

Generally there is nothing to lose in writing more tests. You'll pay that saved half an hour here and there with a two days debug session in the future.