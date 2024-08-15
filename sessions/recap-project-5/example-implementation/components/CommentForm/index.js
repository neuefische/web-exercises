import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 60%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  padding: 0.2rem;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: lightcoral;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
`;

export default function CommentForm({ addComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment({ comment: comment.value, date: new Date().toLocaleString() });
    event.target.reset();
  }
  return (
    <Form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <Label htmlFor="comment">Add comment:</Label>
      <Textarea type="text" id="comment" name="comment" rows="3" required />
      <Button type="submit">Send</Button>
    </Form>
  );
}
