import "./Sort.css";

function Sort() {
  return (
    <div className="container">
      <div className="container__inner">
        <span>All Entries</span>
        <span className="container__number number--red">3</span>
      </div>
      <div className="container__inner">
        <span>Favorites</span>
        <span className="container__number number--grey">1</span>
      </div>
    </div>
  );
}

export default Sort;
