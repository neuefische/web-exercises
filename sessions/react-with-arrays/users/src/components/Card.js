import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="Card-container">
      <h2>{user.name}</h2>
      <ul className="Card__taglist">
        <Tag tag={user.roles[0]} />
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
