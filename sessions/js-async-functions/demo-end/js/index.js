console.clear();

const soccer = document.querySelector('[data-js="soccer"]');
const basketball = document.querySelector('[data-js="basketball"]');
const football = document.querySelector('[data-js="football"]');
const tennis = document.querySelector('[data-js="tennis"]');
const animateButton = document.querySelector('[data-js="animate-button"]');

animateButton.addEventListener("click", async () => {
  animateButton.disabled = true;

  const soccerAnimation = animateBall(soccer);
  console.log("soccerAnimation", soccerAnimation);
  await soccerAnimation;

  const basketballAnimation = animateBall(basketball);
  await basketballAnimation;

  // it also works without assigning the animation to a variable
  await animateBall(football);
  await animateBall(tennis);

  animateButton.disabled = false;
});

/**
 * This is a wrapper around the Web Animations API
 * that allows us to use async/await to animate a ball.
 * It returns a promise that resolves when the animation is finished.
 */
function animateBall(element) {
  return element.animate(
    [
      { offset: 0.0, translate: "0 0", rotate: "0deg", opacity: 0 },
      { offset: 0.2, translate: "0 0", rotate: "0deg", opacity: 1 },
      { offset: 0.8, translate: "550px -250px", rotate: "180deg", opacity: 1 },
      { offset: 1, translate: "550px -250px", rotate: "180deg", opacity: 0 },
    ],
    {
      duration: 3000,
      fill: "forwards",
    }
  ).finished;
}
