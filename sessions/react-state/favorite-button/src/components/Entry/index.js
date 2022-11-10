import { useState } from "react";
import starFilled from "./star-filled.svg";
import star from "./star.svg";

import "./Entry.css";

function Entry({ motto, notes, date }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="entry-card">
      <div className="entry-card__date-container">
        <span>{date}</span>
      </div>
      <div className="entry-card__button-container">
        <h3>{motto}</h3>
        <img
          src={isFavorite ? starFilled : star}
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
          alt="favorite button"
        />
      </div>

      <p>{notes}</p>
    </article>
  );
}

export default Entry;
