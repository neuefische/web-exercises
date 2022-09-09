import {getNewRocket} from './core/rocket.js';
import {FISHSAT, NFSAT} from './payload/satellites.js';
import launchSequenceFunction from './launchSequence.js';

let windowSpy;

beforeEach(() => {
	windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
	windowSpy.mockRestore();
});

test('The default export of launchSequence.js is a function', () => {
	expect(typeof launchSequenceFunction).toBe('function');
});

test('launch() function correctly launches the rocket', () => {
	windowSpy.mockImplementation(() => ({
		rocket: getNewRocket(),
	}));

	expect(() => launchSequenceFunction()).not.toThrow();

	expect(window.rocket.fuel).toBe(true);
	expect(window.rocket.countdown).toBe(5);
	expect(window.rocket.liftoff).toBe(true);
	expect(window.rocket.payload).toContain(NFSAT);
	expect(window.rocket.payload).toContain(FISHSAT);
	expect(window.rocket.payload.length).toBe(2);
	expect(window.rocket.payloadDeployed).toBe(true);
});
