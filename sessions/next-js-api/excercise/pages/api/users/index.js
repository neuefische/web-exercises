import {promises} from 'fs';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const data = await promises.readFile('db/users.json', 'utf-8');
		return;
	}

	res.status(403).json({message: 'Error: request method not allowed.'});
}
