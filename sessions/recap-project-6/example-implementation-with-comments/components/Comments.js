import styled from "styled-components";
import { useRouter } from "next/router.js";
import { FormContainer, Input, Label } from "./Form.js";
import { StyledButton } from "./StyledButton.js";
import useSWR from "swr";
import { Fragment } from "react";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
  text-align: center;
  p {
    border-bottom: solid 1px black;
    padding: 20px;
  }
`;

export default function Comments({ locationName }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: comments,
    mutate,
    isLoading,
    error,
  } = useSWR(`/api/comments/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);
    const response = await fetch(`/api/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...commentData, place: id }),
    });
    if (response.ok) {
      await response.json();
      mutate();
      e.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeleteComment(comment_id) {
    const response = await fetch(
      `/api/comments/${id}?comment_id=${comment_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h2>{comments.length} fans commented on this place:</h2>
          {comments.map(({ _id, name, comment }) => {
            return (
              <Fragment key={_id}>
                <p>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
                <StyledButton onClick={() => handleDeleteComment(_id)}>
                  X
                </StyledButton>
              </Fragment>
            );
          })}
        </>
      )}
    </Article>
  );
}
