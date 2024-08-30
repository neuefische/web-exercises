import "./PokemonCard.css";

export default function PokemonCard({ id, name, types, image }) {
  return (
    <article className="pokemon-card">
      <img className="pokemon-card__image" src={image} alt={name} />
      <div className="pokemon-card__content">
        <h2 className="pokemon-card__name">{name}</h2>
        <span className="pokemon-card__id">No. {id}</span>
        <p className="pokemon-card__types">{types}</p>
      </div>
    </article>
  );
}
