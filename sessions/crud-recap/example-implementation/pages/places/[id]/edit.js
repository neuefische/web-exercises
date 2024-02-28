import Form from "@/components/Form";
import StyledLink from "@/components/StyledLink";

import { useRouter } from "next/router";
import styled from "styled-components";

export default function EditPage({ places, handleEditPlace }) {
  const router = useRouter();
  const { id } = router.query;

  const foundPlace = places.find((place) => place.id === id);

  if (!foundPlace) return null;

  return (
    <Container>
      <StyledLink href="/">back</StyledLink>

      <Form
        onSubmit={handleEditPlace}
        defaultData={foundPlace}
        formName="Edit"
      />
    </Container>
  );
}

const Container = styled.section`
  padding: 1rem;
`;
