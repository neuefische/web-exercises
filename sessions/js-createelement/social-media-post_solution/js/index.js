console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const usernameDisplay = document.createElement("span");
const generatedLikeButton = document.createElement("button");

article.classList.add("post");
content.classList.add("post__content");
footer.classList.add("post__footer");
usernameDisplay.classList.add("post__username");
generatedLikeButton.classList.add("post__button");

content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
usernameDisplay.textContent = "@username2";
generatedLikeButton.textContent = "♥ Like";

generatedLikeButton.addEventListener("click", handleLikeButtonClick);

article.append(content, footer);
footer.append(usernameDisplay, generatedLikeButton);

document.body.append(article);
