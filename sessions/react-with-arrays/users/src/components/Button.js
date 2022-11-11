import "./Button.css";

export default function Button({ buttonType, children }) {
  return (
    <button
      className={`Button ${buttonType === "danger" ? "Button--danger" : ""}`}
    >
      {children}
    </button>
  );
}
