import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function Books() {
  return (
    <Main>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <List>
        <h2>All Volumes</h2>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <Image
                src={volume.cover}
                alt={`cover image of ${volume.title}`}
                width={125}
                height={200}
              />
            </Link>
          </li>
        ))}
      </List>
    </Main>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
