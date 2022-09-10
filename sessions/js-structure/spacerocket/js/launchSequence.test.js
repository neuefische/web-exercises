import {getNewRocket} from './core/rocket.js';
import {FISHSAT, NFSAT} from './payload/satellites.js';
import launchSequenceFunction from './launchSequence.js';

beforeEach(() => {
	global.window = {rocket: getNewRocket()};
});

afterEach(() => {
	delete global.window;
});

test('The default export of launchSequence.js is a function', () => {
	expect(typeof launchSequenceFunction).toBe('function');
});

test('launch() function does not throw', () => {
	expect(() => launchSequenceFunction()).not.toThrow();
});

test('rocket is fueled', () => {
	launchSequenceFunction();
	expect(window.rocket.fuel).toBe(true);
});

test('countdown is correct', () => {
	launchSequenceFunction();
	expect(window.rocket.countdown).toBe(5);
});

test('rocket did lift off', () => {
	launchSequenceFunction();
	expect(window.rocket.liftoff).toBe(true);
});

test('rocket contains NFSAT payload', () => {
	launchSequenceFunction();
	expect(window.rocket.payload).toContain(NFSAT);
});

test('rocket contains FISHSAT payload', () => {
	launchSequenceFunction();
	expect(window.rocket.payload).toContain(FISHSAT);
});

test('rocket has 2 payload items', () => {
	launchSequenceFunction();
	expect(window.rocket.payload.length).toBe(2);
});

test('rocket payload was deployed', () => {
	launchSequenceFunction();
	expect(window.rocket.payloadDeployed).toBe(true);
});
