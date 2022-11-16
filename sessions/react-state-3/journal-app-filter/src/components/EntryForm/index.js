import "./EntryForm.css";
import Button from "../Button";

function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <div className="entry-form__title">New Entry</div>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label id="motto">Motto</label>
          <input type="text" name="motto" htmlFor="motto" />
        </div>
        <div className="entry-form__field">
          <label id="notes">Notes</label>
          <textarea name="notes" htmlFor="notes" rows="4" />
        </div>
        <div className="entry-form__button">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}

export default EntryForm;
