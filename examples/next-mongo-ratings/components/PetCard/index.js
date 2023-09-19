import Card from "../Layout/Card";
import Flex from "../Layout/Flex";
import Link from "next/link";
import { getAverageRating } from "@/lib/utils";
import styled from "styled-components";

const PictureLink = styled(Link)`
  font-size: 10rem;
  align-self: center;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

export default function PetCard({
  _id,
  rated,
  name,
  type,
  species,
  age,
  image,
  ratings,
  actions,
}) {
  return (
    <Card gap="1rem" backgroundColor={rated ? "#ffc300" : "white"}>
      <Flex
        as="h3"
        justifyContent="start"
        alignItems="center"
        gap=".5rem"
        pushLast
      >
        {name}, {age}y
        {rated && (
          <span role="img" aria-label="rated">
            ⭐
          </span>
        )}
        <span>
          {getAverageRating(ratings)} / 5 ({ratings.length})
        </span>
      </Flex>
      <PictureLink href={`/pets/${_id}`}>
        <span role="img" aria-label="Pet picture">
          {image}
        </span>
      </PictureLink>
      <Flex alignItems="center" pushLast>
        <Flex direction="column" justifyContent="center" gap=".25rem">
          <strong style={{ textTransform: "capitalize" }}>{type}</strong>
          <span>{species}</span>
        </Flex>
        {actions}
      </Flex>
    </Card>
  );
}
