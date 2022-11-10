import "./Button.css";

export default function Button({ children, type = "button" }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}
