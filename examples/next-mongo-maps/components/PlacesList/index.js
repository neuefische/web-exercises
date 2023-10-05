import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledPlace = styled(Link)`
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #3a0ca3;
  color: white;
  &:hover {
    background-color: #6b559d;
  }
`;

export default function PlacesList({ places = [] }) {
  return (
    <StyledList>
      {places.length ? (
        places.map(({ _id, name }) => (
          <li key={_id}>
            <StyledPlace href={`/places/${_id}`}>{name}</StyledPlace>
          </li>
        ))
      ) : (
        <li>No places</li>
      )}
    </StyledList>
  );
}
