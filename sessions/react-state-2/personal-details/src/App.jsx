import "./App.css";
import Form from "./components/Form.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">John doe</span>
      </p>
      <p>
        Email: <span className="output">John@Doe.com</span>
      </p>
    </div>
  );
}
