import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

import "./Entry.css";

function Entry({ motto, notes, date }) {
  const isFavorite = false;

  return (
    <article className="entry-card">
      <div className="entry-card__date-container">
        <span>{date}</span>
      </div>
      <div className="entry-card__button-container">
        <h3>{motto}</h3>
        <button
          onClick={() => {
            console.log("favorite button clicked");
          }}
        >
          {isFavorite ? <StarFilled /> : <Star />}
        </button>
      </div>

      <p>{notes}</p>
    </article>
  );
}

export default Entry;
