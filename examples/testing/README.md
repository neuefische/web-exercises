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

On the long run, this would be very impractical, so we wrote tools that automate this process:

```js
import { describe, it, expect } from "vitest";
import { add } from './utils.js';

describe('add', () => {
  it('should be commutative', () => {
    expect(add(2, 3)).toBe(add(3, 2));
  });
  it('should have a neuter element', () => {
    expect(add(2, 0)).toBe(2);
  });
  it('should default the second argument to the neuter element if not passed', () => {
    expect(add(2)).toBe(2);
  });
})
```

Running `npm run test` in the terminal will produce a report of the tests contained in the project.

The tests above are called **unit tests**, because they check the behaviour of the `add` function in isolation, without any further interaction.

## Is testing an optional activity?

Short answer: no.

Long answer: testing is vital for a quality product, as it grants various benefits:

- written knowledge of the app even if team members leave;
- guarantees that contributions from new members that are unaware of the app issues, won't break it;
- allows to test multiple use cases as they are developed, without the need of going through manual browser processes (think a backend team that should develop an API while the frontend is not there yet).

This means that writing tests should be taken into consideration at **estimation time**.

## How much of the software should be tested?

Short answer: the exact amount it is needed.

Long answer: trivial thing might not be tested (e.g. a React component that is just wrapping a spinner .gif). But processes like login, registration, cart checkout, sending notifications...they are the core value of the app, and if broken no user would like to use your product again.

Concepts like the **critical path** of registration or onboarding should then have 100% coverage at every possible level, while less crucial features can allow for more flexibility.

Generally there is nothing to lose in writing more tests. You'll pay that half an hour here and there with a two days debug session in the future.