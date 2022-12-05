import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 32px;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Fields = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const Input = styled.input`
  padding-inline: 20px;
  padding-block: 10px;
  font: inherit;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--granite);
`;

const Checkbox = styled.input`
  margin: 0;
  aspect-ratio: 1;
  width: 44.5px;
`;

const Button = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
  font: inherit;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--granite);
  background-color: var(--granite);
  color: var(--foam);

  &:hover {
    background-color: var(--nemo);
    border-color: var(--nemo);
  }
`;

export default function Form({ onAddMovie }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const isLiked = form.elements.isLiked.checked;

    onAddMovie({
      name,
      isLiked,
    });
    form.reset();
    form.elements.name.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Add a new movie</Title>
      <Fields>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Dr. Strange"
            required
          />
        </Field>
        <Field>
          <Label htmlFor="isLiked">Like</Label>
          <Checkbox id="isLiked" type="checkbox" name="isLiked" />
        </Field>
        <Button type="submit">Add</Button>
      </Fields>
    </StyledForm>
  );
}
