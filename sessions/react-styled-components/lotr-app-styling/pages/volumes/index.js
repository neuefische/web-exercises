import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function Books() {
  return (
    <Main>
      <InfoContainer>
        <h1>The Lord of the Rings</h1>
        <p>{introduction}</p>
      </InfoContainer>
      <VolumesContainer>
        <h2>All Volumes</h2>
        <List>
          {volumes.map((volume) => (
            <ListItem key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>
                <StyledImage
                  src={volume.cover}
                  alt={`cover image of ${volume.title}`}
                  width={125}
                  height={200}
                />
              </Link>
              <span>{volume.title}</span>
            </ListItem>
          ))}
        </List>
      </VolumesContainer>
    </Main>
  );
}

const InfoContainer = styled.div`
  margin: 2rem 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 125px;
  gap: 0.5rem;
  font: var(--font-caption);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const VolumesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
`;
