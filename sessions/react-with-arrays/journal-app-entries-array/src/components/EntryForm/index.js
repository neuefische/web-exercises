import "./EntryForm.css";
import Button from "../Button";

function EntryForm() {
  return (
    <form className="entry-form">
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
