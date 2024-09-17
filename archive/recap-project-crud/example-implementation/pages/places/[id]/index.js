import Button from "@/components/Button";
import ImageContainer from "@/components/ImageContainer";
import StyledLink from "@/components/StyledLink";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function DetailPage({ places, handleDeletePlace }) {
  const router = useRouter();
  const { id } = router.query;

  const foundPlace = places.find((place) => place.id === id);

  if (!foundPlace) return null;

  return (
    <Container>
      <StyledLink href="/">back</StyledLink>
      <ImageContainer>
        <Image alt="" src={foundPlace.image} fill />
      </ImageContainer>
      <h2>
        {foundPlace.name}, {foundPlace.location}
      </h2>
      <Anchor href={foundPlace.mapURL}>Location on Google Maps</Anchor>
      <p>{foundPlace.description}</p>
      <LinkContainer>
        <Button
          type="button"
          onClick={() => {
            handleDeletePlace(id);
            router.push("/");
          }}
        >
          Delete Place
        </Button>
        <Button as={Link} href={`/places/${id}/edit`}>
          Edit Place
        </Button>
      </LinkContainer>
    </Container>
  );
}

const Container = styled.section`
  padding: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Anchor = styled.a`
  display: block;
  text-align: center;

  border: 5px solid lightsalmon;

  border-radius: 14px;

  padding: 1rem;

  text-decoration: none;

  color: black;
`;
