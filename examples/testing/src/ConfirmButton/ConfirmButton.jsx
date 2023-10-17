export default function ConfirmButton({
  label,
  dialogText,
  onConfirm,
  onCancel,
}) {
  function onClick() {
    if (!window.confirm(dialogText)) {
      onCancel();
      return;
    }
    onConfirm();
  }
  return (
    <button className="confirm-button" onClick={onClick}>
      {label}
    </button>
  );
}
