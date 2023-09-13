import Hero from "@/components/Hero";
import Flex from "@/components/Layout/Flex";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <Flex direction="column" padding="1rem" gap="4rem" flex={1}>
      <Hero />
      <Flex direction="column" gap="2rem">
        <Flex as="h2" justifyContent="center">
          Latest Services
        </Flex>
        <Services limit={3} />
      </Flex>
    </Flex>
  );
}
