import "./Form.css";
import Button from "../Button";

function Form() {
  return (
    <>
      <form className="form">
        <p>NEW ENTRY - TODAY, FEB 28, 2028</p>
        <label id="motto">Motto</label>
        <input type="text" name="motto" htmlFor="motto" />
        <label id="notes">Notes</label>
        <input type="textarea" name="notes" htmlFor="notes" />
        <div className="button-container">
          <Button>Create</Button>
        </div>
      </form>
    </>
  );
}

export default Form;
