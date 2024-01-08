import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import ActionLink from "@/components/Layout/ActionLink";
import Services from "@/components/Services";

const Hero = styled.header`
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

export default function HomePage() {
  return (
    <Flex direction="column" padding="1rem" gap="4rem" flex={1}>
      <Hero>
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
        </Flex>
      </Hero>
      <Flex direction="column" gap="2rem">
        <Flex as="h2" justifyContent="center">
          All Services
        </Flex>
        <Services />
      </Flex>
    </Flex>
  );
}
