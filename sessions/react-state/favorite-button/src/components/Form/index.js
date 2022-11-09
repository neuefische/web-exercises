import "./Form.css";

function Form() {
  return (
    <form className="form">
      <p>New Entry - Today, FEB 28, 2028</p>
      <label id="motto">Motto</label>
      <input type="text" name="motto" htmlFor="motto" />
      <label id="notes">Notes</label>
      <input type="textarea" name="notes" htmlFor="notes" />
    </form>
  );
}

export default Form;
