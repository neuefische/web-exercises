import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/Form";
import { StyledLink } from "../../../components/StyledLink";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error } = useSWR(`/api/places/${id}`);

  async function editPlace(place) {
    const response = await fetch(`/api/places/${id}`, {
      method: "PUT",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push(`/places/${id}`);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <StyledLink href={`/places/${id}`} $justifySelf="start">
        back
      </StyledLink>
      <Form onSubmit={editPlace} formName={"edit-place"} defaultData={place} />
    </>
  );
}
