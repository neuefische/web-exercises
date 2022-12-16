import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: fit-content;

  &:hover {
    color: greenyellow;
  }
`;

const TextArea = styled.textarea`
  width: 70%;
  padding: 1rem;
  border-radius: 20px 20px 20px 0;
  resize: vertical;
`;

function CommentForm({ handleSubmitComment, selectedImage }) {
  const [comment, setComment] = useState("");

  function onChange(value) {
    setComment(value);
  }

  function onSubmitComment(event) {
    event.preventDefault();
    const newComment = { commentText: comment, date: new Date() };
    const slug = selectedImage.slug;

    handleSubmitComment(newComment, slug);
  }
  return (
    <Form
      onSubmit={(event) => {
        onSubmitComment(event);
      }}
    >
      <label htmlFor="comment">Write a comment</label>
      <TextArea
        id="comment"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default CommentForm;
