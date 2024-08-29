console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.src =
      i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars(3);
