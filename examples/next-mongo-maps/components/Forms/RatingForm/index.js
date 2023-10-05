import { useState } from "react";
import Form from "@/components/Layout/Form";
import Stars from "@/components/Stars";
import ActionButton from "@/components/Layout/ActionButton";

export default function RatingForm({ pet, disabled, onSubmit }) {
  const [value, setValue] = useState(3);
  async function _onSubmit(event) {
    event.preventDefault();
    onSubmit({ value, text: event.target.text.value });
  }

  function onValueChange(value) {
    setValue(value);
  }

  return (
    <Form onSubmit={_onSubmit}>
      <h2>Rate {pet.name}</h2>
      <label>
        Rating
        <Stars value={value} size={48} interactive onChange={onValueChange} />
      </label>
      <label>
        Comment
        <textarea name="text" placeholder="Enter the rating text" required />
      </label>
      <ActionButton disabled={disabled}>Submit your Rating</ActionButton>
    </Form>
  );
}
