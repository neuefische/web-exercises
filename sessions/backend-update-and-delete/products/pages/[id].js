import Product from "../components/product";
import useSWRMutation from "swr/mutation";

import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;

  async function updateProduct(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { trigger, isMutating } = useSWRMutation(
    `/api/products/${id}`,
    updateProduct
  );

  async function handleEditProduct(event) {
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    await trigger(productData);
    push("/");
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      push("/");
    } else {
      console.error(response.status);
    }
  }

  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }
  return (
    <>
      <Product onSubmit={handleEditProduct} onDelete={handleDeleteProduct} />
    </>
  );
}
