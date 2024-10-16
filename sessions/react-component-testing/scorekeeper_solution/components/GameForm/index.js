import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { useRouter } from "next/router";

const Form = styled.form`
  display: grid;
  gap: 10px;
`;

export default function GameForm({ onCreateGame }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;
    onCreateGame({
      nameOfGame: formElements.nameOfGame.value,
      playerNames: formElements.playerNames.value
        .split(",")
        .map((name) => name.trim()),
    });
    form.reset();
    router.push("/game");
  }

  return (
    <Form
      aria-labelledby="formHeader"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 id="formHeader">Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Dodelido"
        required
      />
      <Input
        name="playerNames"
        labelText="Player names, separated by comma"
        placeholder="e.g. John Doe, Jane Doe"
        required
      />
      <Button>Create game</Button>
    </Form>
  );
}
