console.clear();

const ballKeyframes = [
  { offset: 0.0, translate: "0 0", rotate: "0deg", opacity: 0 },
  { offset: 0.2, translate: "0 0", rotate: "0deg", opacity: 1 },
  { offset: 0.8, translate: "550px -250px", rotate: "180deg", opacity: 1 },
  { offset: 1, translate: "550px -250px", rotate: "180deg", opacity: 0 },
];

const ballAnimation = {
  duration: 3000,
  fill: "forwards",
};

const soccer = document.querySelector('[data-js="ball"][data-type="soccer"]');
const basketball = document.querySelector(
  '[data-js="ball"][data-type="basketball"]'
);
const football = document.querySelector(
  '[data-js="ball"][data-type="football"]'
);
const tennis = document.querySelector('[data-js="ball"][data-type="tennis"]');

const animateButton = document.querySelector('[data-js="animate-button"]');

animateButton.addEventListener("click", async () => {
  animateButton.disabled = true;

  const soccerAnimation = soccer.animate(ballKeyframes, ballAnimation);
  console.log("soccerAnimation.finished", soccerAnimation.finished);
  await soccerAnimation.finished;

  const basketballAnimation = basketball.animate(ballKeyframes, ballAnimation);
  await basketballAnimation.finished;

  const footballAnimation = football.animate(ballKeyframes, ballAnimation);
  await footballAnimation.finished;

  const tennisAnimation = tennis.animate(ballKeyframes, ballAnimation);
  await tennisAnimation.finished;

  animateButton.disabled = false;
});
