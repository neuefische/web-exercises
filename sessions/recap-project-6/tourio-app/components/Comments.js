import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";
import useSWR from "swr";
import { useRouter } from "next/router";
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
    const { data: comments, isLoading, error } = useSWR(`/api/comments/${id}`);

    if (!isReady || isLoading || error) return <h2>Loading...</h2>;

    function handleSubmitComment(e) {
        e.preventDefault();
    }

    return (
        <Article>
            <FormContainer onSubmit={handleSubmitComment}>
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" name="name" placeholder="name" />
                <Label htmlFor="comment">Your Comment</Label>
                <Input
                    type="text"
                    name="comment"
                    placeholder="comment here..."
                />
                <StyledButton type="submit">Send</StyledButton>
            </FormContainer>
            {comments && (
                <>
                    <h2>{comments.length} fans commented on this place:</h2>
                    {comments.map(({ id, name, comment }) => {
                        return (
                            <Fragment key={id}>
                                <p>
                                    <small>
                                        <strong>{name}</strong> commented on{" "}
                                        {locationName}
                                    </small>
                                </p>
                                <span>{comment}</span>
                            </Fragment>
                        );
                    })}
                </>
            )}
        </Article>
    );
}
