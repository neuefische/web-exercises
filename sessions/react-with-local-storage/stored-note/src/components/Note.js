import "./Note.css";

export default function Note({ note, onNoteChange }) {
  return (
    <textarea
      className="note"
      value={note}
      onChange={(e) => onNoteChange(e.target.value)}
      placeholder="Write your note here... 📝"
      rows={10}
    />
  );
}
