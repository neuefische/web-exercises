import useSWR from "swr";
import { StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>Available Fishes</h1>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
