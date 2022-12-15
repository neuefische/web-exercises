import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Palette from "../../components/Palette";
import CommentForm from "../../components/CommentForm";
import DetailItem from "../../components/DetailItem";

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
  background: #000;
  color: #fff;
  margin: 0;
  padding: 1rem 1rem 2rem 1rem;
  gap: 1rem;
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
  border-radius: 20px 20px 0 20px;

  & span:last-child {
    font-size: 0.7rem;
    color: grey;
  }
`;

const PaletteWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: lightblue;
  }
`;

export default function ArtPieceDetails({
  pieces,
  handleSubmitComment,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedImg = pieces.find((piece) => piece.slug === slug);
  const imageInfo = artPiecesInfo.find((infoItem) => infoItem.slug === slug);

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
        <StyledLink href="/art-pieces">⬅︎ Back</StyledLink>
        <h2>{selectedImg.name}</h2>
        <DetailItem detailType={"Artist"} detailValue={selectedImg.artist} />
        <DetailItem detailType={"Year"} detailValue={selectedImg.year} />
        <DetailItem detailType={"Genre"} detailValue={selectedImg.genre} />
        <DetailItem
          detailType={"Color Palette"}
          detailValue={
            <PaletteWrapper>
              {selectedImg.colors.map((color) => (
                <Palette paletteColor={color} />
              ))}
            </PaletteWrapper>
          }
        />
      </DetailList>

      <CommentSection>
        <CommentSectionTitle>Comments</CommentSectionTitle>
        {imageInfo?.comments?.map((comment) => (
          <Comment>
            <span>{comment.commentText}</span>
            <span>{comment.date.toString()}</span>
          </Comment>
        ))}
        <CommentForm
          handleSubmitComment={handleSubmitComment}
          selectedImg={selectedImg}
        />
      </CommentSection>
    </DetailWrapper>
  );
}
