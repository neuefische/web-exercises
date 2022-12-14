import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Listings() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <article>
            <h2>Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>
              Price: {product.price}
              {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
