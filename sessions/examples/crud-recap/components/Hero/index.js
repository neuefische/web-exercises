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
      <h1>ACME Services</h1>
      <p>
        Here you can offer your help
        <br />
        and book anything you might need!
      </p>
      <Flex>
        <ActionLink size="large" href="/dashboard/services/create">
          Share your Skills
        </ActionLink>
        <ActionLink size="large" href="/services">
          Search for Services
        </ActionLink>
      </Flex>
    </StyledHero>
  );
}
