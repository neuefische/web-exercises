import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "./Button";

export default function Form({ onSubmit, defaultData, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const placeData = defaultData ? { ...data, id: defaultData.id } : data;

    onSubmit(placeData);

    router.push("/");
  }

  return (
    <>
      <h2>{formName} place</h2>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={defaultData?.name}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={defaultData?.location}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          defaultValue={defaultData?.image}
        />
        <label htmlFor="mapURL">mapURL:</label>
        <input
          type="text"
          id="mapURL"
          name="mapURL"
          defaultValue={defaultData?.mapURL}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={defaultData?.description}
        />
        <Button type="submit">
          {formName === "Add" ? "Add new place" : "Edit place"}
        </Button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 3rem;
  gap: 1rem;
`;
