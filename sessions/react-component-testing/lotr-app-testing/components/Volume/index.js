import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const VolumeFigure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  width: min-content;
`;

const CoverImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  transition: box-shadow 0.2s;
`;

const VolumeLink = styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  margin: -8px;
  padding: 8px;

  &:hover,
  &:focus-visible {
    text-decoration: underline;

    ${CoverImage} {
      box-shadow: var(--box-shadow-book--hover);
    }
  }
`;

const VolumeCaption = styled.figcaption`
  font: var(--font-caption);
`;

export default function Volume({ slug, title, cover }) {
  return (
    <VolumeLink href={`/volumes/${slug}`}>
      <VolumeFigure>
        <CoverImage
          src={cover}
          alt={`cover image of ${title}`}
          width={85}
          height={140}
        />
        <VolumeCaption>{title}</VolumeCaption>
      </VolumeFigure>
    </VolumeLink>
  );
}
