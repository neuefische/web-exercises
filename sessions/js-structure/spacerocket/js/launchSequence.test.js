/**
 * @jest-environment jsdom
 */

import { getNewRocket, getRocket } from "./core/rocket.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";
import * as launchSequence from "./launchSequence.js";

const launchSequenceFunction = launchSequence?.default;

beforeEach(() => {
  window.rocket = getNewRocket();
});

afterEach(() => {
  delete window.rocket;
});

test("The default export of launchSequence.js is a function", () => {
  expect(typeof launchSequenceFunction).toBe("function");
});

test("launchSequence function does not throw", () => {
  expect(() => launchSequenceFunction()).not.toThrow();
});

test("rocket is fueled", () => {
  launchSequenceFunction();
  expect(getRocket().fuel).toBe(true);
});

test("countdown is correct", () => {
  launchSequenceFunction();
  expect(getRocket().countdown).toBe(5);
});

test("rocket did lift off", () => {
  launchSequenceFunction();
  expect(getRocket().liftoff).toBe(true);
});

test("rocket contains NFSAT payload", () => {
  launchSequenceFunction();
  expect(getRocket().payload).toContain(NFSAT);
});

test("rocket contains FISHSAT payload", () => {
  launchSequenceFunction();
  expect(getRocket().payload).toContain(FISHSAT);
});

test("rocket has 2 payload items", () => {
  launchSequenceFunction();
  expect(getRocket().payload.length).toBe(2);
});

test("rocket payload was deployed", () => {
  launchSequenceFunction();
  expect(getRocket().payloadDeployed).toBe(true);
});
