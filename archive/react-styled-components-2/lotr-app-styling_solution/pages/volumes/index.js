import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <Wrapper>
      <Title>The Lord of the Rings</Title>
      <Content>{introduction}</Content>
      <VolumeTitle>All Volumes</VolumeTitle>
      <VolumeList>
        {volumes.map((volume) => (
          <Volume key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={80}
              height={130}
            />
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </Volume>
        ))}
      </VolumeList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 2.5rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Content = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const VolumeTitle = styled.h2`
  font: var(--font-headline-2);
`;

const VolumeList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

const Volume = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font: var(--font-caption);
`;
