import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { StyledList } from "./ProductList.styled";

export default function ProductList() {
  const router = useRouter();
  const { data } = useSWR("/api/products");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((product) => (
        <li key={product.id}>
          <StyledButton
            type="button"
            onClick={() => router.push(`/${product.id}`)}
          >
            {product.name}
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
}
