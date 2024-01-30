export default function IndexPage({ recipes = [] }) {
  return (
    <>
      <h1>Frontend Recap</h1>
      {!recipes.length ? (
        "No recipes yet."
      ) : (
        <>
          <p>Those are my fav recipes!</p>
        </>
      )}
    </>
  );
}
