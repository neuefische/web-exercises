import Hero from "@/components/Hero";
import Flex from "@/components/Layout/Flex";
import Pets from "@/components/Pets";

export default function HomePage() {
  return (
    <Flex direction="column" padding="1rem" gap="4rem" flex={1}>
      <Hero />
      <Flex direction="column" gap="2rem">
        <Flex as="h2" justifyContent="center">
          Latest Pets
        </Flex>
        <Pets limit={6} />
      </Flex>
    </Flex>
  );
}
