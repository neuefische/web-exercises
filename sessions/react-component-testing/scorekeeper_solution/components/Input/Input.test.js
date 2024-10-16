import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name"
      name="name-input"
      placeholder="Name of player"
      value="Bernd"
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText("Name");

  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "Name of player");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("name", "name-input");
  expect(input).toHaveAttribute("id", "name-input");
  expect(input).toHaveAttribute("value", "Bernd");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(<Input labelText="Name" name="name.input" onChange={handleChange} />);

  const input = screen.getByLabelText("Name");

  expect(input).toBeInTheDocument();

  expect(handleChange).toHaveBeenCalledTimes(0);

  await user.type(input, "Bernd");

  expect(handleChange).toHaveBeenCalledTimes(5);
});
