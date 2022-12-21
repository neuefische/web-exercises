import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Palette from "./Palette";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import DetailItem from "./DetailItem";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-block-end: 5vh;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const DetailTitle = styled.h2`
  margin: 0;
  background: #000;
  color: #fff;
  padding: 1rem;
`;

const DetailList = styled.dl`
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fff;
  margin: 0;
  padding: 1rem;
  gap: 1rem;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentSectionTitle = styled.h2`
  margin: 0;
`;

const PaletteWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: #000;

  &:hover {
    color: greenyellow;
  }
`;

function ArtPieceDetails({ selectedImage, handleSubmitComment, imageInfo }) {
  console.log(selectedImage);
  return (
    <DetailWrapper>
      <ImageContainer>
        <StyledImage
          src={selectedImage.imageSource}
          alt={selectedImage.name}
          fill
          priority
        />
      </ImageContainer>
      <StyledLink href="/art-pieces">⬅︎ Back</StyledLink>
      <DetailTitle>{selectedImage.name}</DetailTitle>
      <DetailList>
        <DetailItem detailType={"Artist"} detailValue={selectedImage.artist} />
        <DetailItem detailType={"Year"} detailValue={selectedImage.year} />
        <DetailItem detailType={"Genre"} detailValue={selectedImage.genre} />
        <DetailItem
          detailType={"Color Palette"}
          detailValue={
            <PaletteWrapper>
              {selectedImage.colors.map((color) => (
                <Palette key={color} paletteColor={color} />
              ))}
            </PaletteWrapper>
          }
        />
      </DetailList>

      <CommentSection>
        <CommentSectionTitle>Comments</CommentSectionTitle>
        {imageInfo?.comments?.map((comment) => (
          <Comment key={comment.date.toString()} comment={comment} />
        ))}
        <CommentForm
          handleSubmitComment={handleSubmitComment}
          selectedImage={selectedImage}
        />
      </CommentSection>
    </DetailWrapper>
  );
}

export default ArtPieceDetails;
