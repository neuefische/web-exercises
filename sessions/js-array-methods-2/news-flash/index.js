import {news} from './utils/news.js';
import {Card} from './components/Card/Card.js';

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter(() => {
	return true;
});

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.forEach(news => {
	const cardElement = Card(news);
	container.append(cardElement);
});
