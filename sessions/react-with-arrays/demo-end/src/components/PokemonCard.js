import "./PokemonCard.css";

export default function PokemonCard({ id, name, types, image }) {
  return (
    <article className="PokemonCard">
      <img className="PokemonCard__image" src={image} alt={name} />
      <div className="PokemonCard__content">
        <h2 className="PokemonCard__name">{name}</h2>
        <span className="PokemonCard__id">No. {id}</span>
        <p className="PokemonCard__types">{types}</p>
      </div>
    </article>
  );
}
