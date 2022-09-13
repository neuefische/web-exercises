export default function changeCard(cardElement) {
	const cardButton = cardElement.querySelector('[data-js="card-button"]');

	cardButton.addEventListener('click', () => {
		cardElement.children[0].textContent = 'Real Latin Placeholder Text';
		cardElement.children[1].textContent =
			'Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. (Caes. BG 1.1.1)';
		cardButton.classList.add('card__button-clicked');
		cardElement.classList.add('card-changed');
	});
}
