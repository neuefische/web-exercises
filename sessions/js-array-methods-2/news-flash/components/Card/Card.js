export function Card(cardData) {
  const card = document.createElement("li");
  card.className = "card";

  const cardHeading = document.createElement("h2");
  cardHeading.textContent = cardData.title;

  card.append(cardHeading);

  const cardList = document.createElement("ul");

  cardData.categories.forEach((category) => {
    const cardListItem = document.createElement("li");
    cardListItem.className = "card__category";
    cardListItem.textContent = category;

    cardList.append(cardListItem);
  });

  card.append(cardList);

  const cardBody = document.createElement("p");
  cardBody.textContent = cardData.body;

  card.append(cardBody);

  return card;
}
