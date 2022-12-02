import { render, screen } from "@testing-library/react";
import expect from "@testing-library/jest-dom";
import Player from ".";

describe("Player", () => {
  test("displays the player name, the score, and two buttons to increase and decrease score", () => {
    render(
      <Player
        name="John"
        score="5"
        onDecreasePlayerScore={handleDecrease}
        onIncreasePlayerScore={handleIncrease}
      />
    );
    const nameOfPlayer = screen.getByText("John");
    const score = screen.getByText("5");
    const increaseButton = screen.getByRole("button", {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease score/i,
    });

    screen.debug();

    expect(nameOfPlayer).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
  });

  test.skip(
    "calls an increase and decrease function when the buttons are clicked."
  );
});
