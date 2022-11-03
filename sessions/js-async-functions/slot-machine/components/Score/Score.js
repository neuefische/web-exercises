function getScoreFromLocalStorage() {
  const score = localStorage.getItem("score");
  return score ? parseInt(score, 10) : 0;
}

function setScoreInLocalStorage(score) {
  localStorage.setItem("score", score);
}

export function Score() {
  const scoreElement = document.createElement("div");
  scoreElement.classList.add("score");

  function render() {
    scoreElement.innerHTML = /* html */ `
			<span class="score__label">Score:</span>
			<span class="score__value">${getScoreFromLocalStorage()}</span>
		`;
  }

  render();

  function addPoints(points) {
    setScoreInLocalStorage(Math.max(0, getScoreFromLocalStorage() + points));
    render();
  }

  scoreElement.addPoints = addPoints;

  return scoreElement;
}
