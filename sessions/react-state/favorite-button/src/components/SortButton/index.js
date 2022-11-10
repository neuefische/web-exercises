import "./SortButton.css";

function SortButton({ buttonText, entryCount, active }) {
  return (
    <button className="sort-button">
      <span className={active ? "sort-button__text--red" : "sort-button__text"}>
        {buttonText}
      </span>
      <span
        className={active ? "sort-button__number--red" : "sort-button__number"}
      >
        {entryCount}
      </span>
    </button>
  );
}

export default SortButton;
