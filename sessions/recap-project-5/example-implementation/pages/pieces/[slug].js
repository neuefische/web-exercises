import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100vh;
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
  background: #000;
  margin: 0;
  color: #fff;
  padding: 1rem;
`;

export default function DetailsPage({ images }) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedImg = images.find((image) => image.slug === slug);
  console.log(selectedImg);

  if (!selectedImg) {
    return null;
  }

  return (
    <DetailWrapper>
      <ImageContainer>
        <StyledImage
          src={selectedImg.imageSource}
          fill
          alt={selectedImg.name}
        />
      </ImageContainer>
      <DetailList>
        <h2>{selectedImg.name}</h2>
        <dt>
          <strong>Artist</strong>
        </dt>
        <dd>{selectedImg.artist}</dd>
        <dt>
          <strong>Pic</strong>
        </dt>
        <dd>Detail</dd>
      </DetailList>

      <div>
        <h3>Comments</h3>

        <p>This sucks lol</p>
      </div>

      <div>
        <label htmlFor="comment">Write a comment</label>
        <textarea id="comments" />
      </div>
      <Link href="/pieces">Back</Link>
    </DetailWrapper>
  );
}
