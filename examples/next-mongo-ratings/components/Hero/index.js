import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import ActionLink from "../Layout/ActionLink";

const StyledHero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  & > * {
    margin: 0;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <h1>Pet Ratings</h1>
      <p>
        Here we rate only good boys and good girls
        <br />
        No ratings under 5/5 allowed!
      </p>
      <Flex>
        <ActionLink $size="large" href="/pets">
          Browse all Pets
        </ActionLink>
      </Flex>
    </StyledHero>
  );
}
