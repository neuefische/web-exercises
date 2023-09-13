import Flex from "@/components/Layout/Flex";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <Flex direction="column" padding="1rem" gap="2rem" flex={1}>
      <Flex as="header" direction="column">
        <h1>Services</h1>
        <p>There is literally nothing that cannot be found here!</p>
      </Flex>
      <Services />
    </Flex>
  );
}
