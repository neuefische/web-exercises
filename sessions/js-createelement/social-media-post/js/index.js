console.clear();

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener('click', () => {
	likeButton.classList.toggle('post__button--liked');
});

// Exercise:
// Use document.createElement() and append another social media post to the body.
