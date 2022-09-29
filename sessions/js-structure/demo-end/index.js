import {Card} from './components/Card/Card.js';
import {Header} from './components/Header/Header.js';
import {authors} from './utils/authors.js';

const root = document.querySelector('#root');

const header = Header();
root.append(header);

authors.forEach(author => {
	const cardElement = Card(author);
	root.append(cardElement);
});
