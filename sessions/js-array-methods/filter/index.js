console.clear();

const cards = [
	{
		id: '1',
		question: 'How often can I use <header>?',
		answer: 'As often as you like.',
		tags: ['html', 'elements', 'basic'],
	},
	{
		id: '2',
		isBookmarked: false,
		question: 'How often can I use <aside>?',
		answer: 'As often as you like.',
		tags: ['html', 'elements', 'basic'],
	},
	{
		id: '3',
		isBookmarked: true,
		question: 'On which types can I use destructuring assignment?',
		answer: 'On Objects and Arrays',
		tags: ['js', 'next'],
	},
];

// Filter: returns an array of max. same length
// but with unaltered content
// is called with a function that returns a 'truthy' or 'falsy' value
const notBookmarkedCards = cards.filter(card => !card.isBookmarked);
console.log(notBookmarkedCards);

// 1: Filter the array for cards with the 'html' tag
// HINT: use the array method "includes"
const onlyCardsWithTagHTML = null;

// 2: Filter the array for cards with 3 tags.
const allCardsWith3Tags = null;

// 3: Filter the array for cards with the 'html' or 'js' tag that are also bookmarked.
const allCardsWithTagsHTMLOrJSThatAreBookmarked = null;
