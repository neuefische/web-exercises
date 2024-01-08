import Form from "@/components/Layout/Form";
import ActionButton from "@/components/Layout/ActionButton";

export default function ServiceForm({ service = {}, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }
  return (
    <Form as="form" direction="column" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          defaultValue={service.name}
          placeholder="Enter the service name"
          required
          autoFocus
        />
      </label>
      <label>
        Offerer
        <input
          name="offerer"
          defaultValue={service.offerer}
          placeholder="Enter the offerer name"
          required
        />
      </label>
      <label>
        Price
        <input
          name="price"
          type="number"
          defaultValue={service.price}
          placeholder="Enter the service price"
          required
        />
      </label>
      <label>
        Image
        <input
          name="image"
          defaultValue={service.image}
          placeholder="Enter the service image"
          required
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          type="price"
          defaultValue={service.description}
          placeholder="Enter the service description"
          required
        />
      </label>
      <ActionButton>Save</ActionButton>
    </Form>
  );
}
