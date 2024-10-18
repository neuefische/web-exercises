import ProductList from "@/components/ProductList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
