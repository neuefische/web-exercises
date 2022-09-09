import {countdown} from './core/countdown.js';
import {deployPayload} from './core/deploy.js';
import {fuel} from './core/fuel.js';
import {liftoff} from './core/liftoff.js';
import {loadPayload} from './core/load.js';
import {FISHSAT, NFSAT} from './payload/satellites.js';

function launch() {
	fuel();
	loadPayload(NFSAT);
	loadPayload(FISHSAT);
	for (let i = 0; i < 5; i++) {
		countdown();
	}

	liftoff();
	deployPayload();
}

export default launch;
