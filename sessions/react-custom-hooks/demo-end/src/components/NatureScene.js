import { useNatureScene } from "../utils/fetch";

export default function Planet() {
  const { natureScene, handleNextNatureScene } = useNatureScene();

  if (!natureScene) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>{natureScene.name}</h1>
      <figure>
        <img src={natureScene.image} alt="a nature scene" />
        <figcaption>{natureScene.caption}</figcaption>
      </figure>

      <button type="button" onClick={handleNextNatureScene}>
        Next Scene
      </button>
    </>
  );
}
