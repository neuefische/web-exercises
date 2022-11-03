/* eslint-disable eqeqeq */
/* eslint-disable operator-linebreak */
/* eslint-disable no-eq-null */
/* eslint-disable no-unused-expressions */
const visualElement = document.querySelector('[data-js="visual"]');

const dollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function render(rocket, state) {
  visualElement.innerHTML = "";

  const stateElement = document.createElement("div");
  stateElement.classList.add("state");
  visualElement.appendChild(stateElement);

  const triesElement = document.createElement("div");
  triesElement.textContent = `Tries: ${state?.tries}`;
  stateElement.appendChild(triesElement);

  const costElement = document.createElement("div");
  costElement.textContent = `Total Cost: ${dollarFormatter.format(
    state?.cost
  )}`;
  stateElement.appendChild(costElement);

  const rocketElement = document.createElement("div");
  rocketElement.classList.add("rocket");
  if (rocket?.liftoff === false) {
    rocketElement.classList.add("rocket--on-ground");
  }

  visualElement.appendChild(rocketElement);

  const rocketBodyElement = document.createElement("div");
  rocketBodyElement.classList.add("rocket__body");
  rocketElement.appendChild(rocketBodyElement);

  const rocketBurnElement = document.createElement("div");
  rocketBurnElement.classList.add("rocket__burn");
  rocketElement.appendChild(rocketBurnElement);

  rocket?.payload.forEach((satellite, index) => {
    const satelliteElement = document.createElement("div");
    satelliteElement.classList.add("satellite");
    satelliteElement.classList.add("satellite--" + satellite.type);
    satelliteElement.classList.add("satellite--" + index);
    rocketElement.appendChild(satelliteElement);
  });

  if (rocket?.countdown) {
    const countdownElement = document.createElement("div");
    countdownElement.classList.add("countdown");
    visualElement.appendChild(countdownElement);

    for (let i = rocket?.countdown; i > 0; i--) {
      const span = document.createElement("span");
      span.textContent = i;
      countdownElement.appendChild(span);
    }
  }

  visualElement.style.setProperty("--rocket-countdown", rocket?.countdown);

  visualElement.style.setProperty(
    "--rocket-liftoff-delay",
    rocket?.liftoff ? 7.5 : 0
  );

  // Unset, trigger layout, then set again
  visualElement.style.setProperty("--rocket-liftoff-background", "");
  visualElement.offsetLeft;
  visualElement.style.setProperty(
    "--rocket-liftoff-background",
    rocket?.liftoff ? "liftoff-background" : ""
  );

  visualElement.style.setProperty(
    "--rocket-liftoff",
    rocket?.liftoff == null ? "" : rocket?.liftoff ? "liftoff" : "ground"
  );
  visualElement.style.setProperty(
    "--rocket-burn",
    rocket?.liftoff ? "burn" : ""
  );
  visualElement.style.setProperty(
    "--rocket-payload-deployed",
    rocket?.payloadDeployed ? "deploy" : ""
  );

  if (rocket?.error) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("error");
    visualElement.appendChild(errorElement);
    errorElement.textContent = "Mission failed: " + rocket.error.message;
  }

  if (rocket?.success) {
    const successElement = document.createElement("div");
    successElement.classList.add("success");
    visualElement.appendChild(successElement);
    successElement.textContent =
      "👏 Mission successful! Well done cadette. We are the best. And best of all, we only wasted " +
      dollarFormatter.format(state.cost) +
      " on our " +
      state.tries +
      " tries for this mission.";
  }
}

render(
  undefined,
  JSON.parse(
    window.localStorage.getItem("state") ??
      JSON.stringify({ tries: 0, cost: 0 })
  )
);
