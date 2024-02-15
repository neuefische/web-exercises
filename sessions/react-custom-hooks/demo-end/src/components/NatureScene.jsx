import { useNatureScene } from "../utils/fetch";
import "./NatureScene.css"

export default function NatureScene() {
  const { natureScene, handleNextNatureScene } = useNatureScene();

  if (!natureScene) {
    return <h3>Loading...</h3>;
  }

  console.log("natureScene", natureScene);
  return (
    <>
      <h1>Nature Scene</h1>
      <figure>
        <img src={natureScene.image} alt="a nature scene" />
        <figcaption>{natureScene.caption}</figcaption>
      </figure>

      <button type="button" className="button" onClick={handleNextNatureScene}>
        Next Scene
      </button>
    </>
  );
}
