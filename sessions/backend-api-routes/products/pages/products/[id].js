import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <article>
      <h2>Name: {data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </article>
  );
}
