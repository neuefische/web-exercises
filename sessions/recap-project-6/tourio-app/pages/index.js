import styled from "styled-components";
import Card from "../components/Card";
import useSWR from "swr";
import { StyledLink } from "../components/StyledLink";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <ListContainer>
        {data.map((place) => {
          return (
            <li key={place.id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place.id}
              />
            </li>
          );
        })}
      </ListContainer>
      <FixedLink href="/create">+ place</FixedLink>
    </>
  );
}
