import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Palette from "../../components/Palette";
import { useState } from "react";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-block-end: 5vh;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const DetailList = styled.dl`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 1rem;
  gap: 0.5rem;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 3rem;
`;

const CommentSectionTitle = styled.h2`
  margin: 0;
`;

const Comment = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #000;
  color: #fff;
  margin: 0;
  padding: 1rem;
  border-radius: 20px 20px 20px 0;

  & span:last-child {
    font-size: 0.7rem;
    color: grey;
  }
`;

const PaletteWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  background: #000;
  width: fit-content;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: #fff;

  &:hover {
    color: lightblue;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  width: fit-content;
  align-self: flex-end;
`;

export default function ArtPieceDetails({
  pieces,
  handleSubmit,
  artPiecesInfo,
}) {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { slug } = router.query;
  const selectedImg = pieces.find((piece) => piece.slug === slug);
  const imageInfo = artPiecesInfo.find((infoItem) => infoItem.slug === slug);

  function onChange(value) {
    setComment(value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const newComment = { commentText: comment, date: new Date() };
    const slug = selectedImg.slug;

    handleSubmit(newComment, slug);
  }

  if (!selectedImg) {
    return null;
  }

  return (
    <DetailWrapper>
      <ImageContainer>
        <StyledImage
          src={selectedImg.imageSource}
          alt={selectedImg.name}
          fill
          priority
        />
      </ImageContainer>
      <DetailList>
        <h2>{selectedImg.name}</h2>
        <dt>
          <strong>Artist</strong>
        </dt>
        <dd>{selectedImg.artist}</dd>
        <dt>
          <strong>Year</strong>
        </dt>
        <dd>{selectedImg.year}</dd>
        <dt>
          <strong>Genre</strong>
        </dt>
        <dd>{selectedImg.genre}</dd>
        <dt>
          <strong>Color Palette</strong>
        </dt>
        <dd>
          <PaletteWrapper>
            {selectedImg.colors.map((color) => (
              <Palette paletteColor={color} />
            ))}
          </PaletteWrapper>
        </dd>
      </DetailList>

      <CommentSection>
        <CommentSectionTitle>Comments</CommentSectionTitle>
        {imageInfo?.comments.map((comment) => (
          <Comment>
            <span>{comment.commentText}</span>
            <span>{comment.date.toString()}</span>
          </Comment>
        ))}
        <Form
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <label htmlFor="comment">Write a comment</label>
          <textarea
            id="comment"
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
          <Button type="submit">Send</Button>
        </Form>
      </CommentSection>
      <StyledLink href="/art-pieces">Back</StyledLink>
    </DetailWrapper>
  );
}
