import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

function Entry({ motto, notes, date }) {
  return (
    <article className="entry">
      <div className="entry__date">{date}</div>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}

export default Entry;
