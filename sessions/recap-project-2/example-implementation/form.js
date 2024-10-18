const form = document.querySelector("[data-js=form]");
const cardContainer = document.querySelector("[data-js=card-container]");
const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector("[data-js=answer-input]");
const questionCounter = document.querySelector(
  "[data-js=question-character-count]"
);
const answerCounter = document.querySelector(
  "[data-js=answer-character-count]"
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  const newCard = Card(data);
  cardContainer.append(newCard);

  formElement.reset();
});

questionInput.addEventListener("input", () => {
  const currentCharacterCount = questionInput.value.length;
  questionCounter.textContent = `${currentCharacterCount}/150`;
});

answerInput.addEventListener("input", () => {
  const currentCharacterCount = answerInput.value.length;
  answerCounter.textContent = `${currentCharacterCount}/150`;
});

function Card(cardData) {
  const cardElement = document.createElement("li");
  cardElement.className = "card-list__item";
  cardElement.innerHTML = `<article class="card" data-js="card">
    <h2 class="card__question" data-js='question-display'></h2>
    <button
      class="card__button-answer"
      data-js="answer-button"
      type="button"
    >
      Show answer
    </button>
    <p class="card__answer" data-js="answer-display"></p>
    <ul class="card__tag-list" data-js='tag-list'></ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark-button"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>`;

  const questionDisplay = cardElement.querySelector(
    "[data-js=question-display]"
  );
  const answerDisplay = cardElement.querySelector("[data-js=answer-display]");
  const tagList = cardElement.querySelector("[data-js=tag-list]");

  questionDisplay.textContent = cardData.question;
  answerDisplay.textContent = cardData.answer;

  const newTag = document.createElement("li");
  newTag.className = "card__tag-list-item";
  newTag.textContent = cardData.tag;
  tagList.append(newTag);

  // --v-- Only for Bonus Task --v--

  const answerButton = cardElement.querySelector("[data-js=answer-button]");
  const bookmarkButton = cardElement.querySelector("[data-js=bookmark-button]");

  // Bookmark Interaction
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });

  // Answer Display Toggling
  answerButton.addEventListener("click", () => {
    const isAnswerVisible = answerDisplay.classList.contains(
      "card__answer--active"
    );

    if (isAnswerVisible) {
      answerDisplay.classList.remove("card__answer--active");
      answerButton.textContent = "Show answer";
    } else {
      answerDisplay.classList.add("card__answer--active");
      answerButton.textContent = "Hide answer";
    }
  });

  // --^-- Only for Bonus Task --^--

  return cardElement;
}
