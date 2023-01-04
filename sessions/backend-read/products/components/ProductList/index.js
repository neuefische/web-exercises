import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const { data } = useSWR("/api/products");
  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product._id}>
          <button type="button" onClick={() => router.push(`/${product._id}`)}>
            {product.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
