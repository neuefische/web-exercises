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

  async function handleEditProduct(productData) {
    await trigger(productData);
    push("/");
  }

  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    if (response.ok) {
      await response.json();
      push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} heading="Update this Fish" />
      )}
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit Product
      </button>
      <button type="button" onClick={handleDeleteProduct}>
        Delete Product
      </button>
      <Product />
    </>
  );
}
