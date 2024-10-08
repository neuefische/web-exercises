import styled from "styled-components";
import { useRouter } from "next/router.js";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";
import useSWR from "swr";

export default function Comments({ locationName, comments, mutate }) {
  const router = useRouter();
  const { id } = router.query;
  // const { data, mutate } = useSWR(`/api/places/${id}`);

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

  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);
    // const finalData = { ...commentData, place: id };
    const response = await fetch(`/api/places/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (response.ok) {
      await response.json();
      mutate();
      e.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeleteComment(_id) {
    const response = await fetch(`/api/places/${id}/comment`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    });
    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  // const comments = data?.comments;

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
          <h1>
            {comments.length} fan{comments.length > 1 && "s"} commented on this
            place:
          </h1>
          {comments.map(({ name, comment, _id }, idx) => {
            return (
              <>
                <p key={idx}>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
                <StyledButton
                  onClick={() => handleDeleteComment(_id)}
                  style={{ cursor: "pointer" }}
                >
                  X
                </StyledButton>
              </>
            );
          })}
        </>
      )}
    </Article>
  );
}
