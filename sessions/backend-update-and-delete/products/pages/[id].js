import Product from "../components/product";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductForm from "../components/ProductForm/index";

export default function ProductDetailsPage() {
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;

  async function sendRequest(url, { arg }) {
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
    sendRequest
  );

  async function handleEditProduct(productData) {
    await trigger(productData);
    push("/");
  }

  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }

  return (
    <>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} heading="Update this Fish" />
      )}
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit Joke
      </button>
      <Product />
    </>
  );
}
