import Head from "next/head.js";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={
            artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      )}
    </>
  );
}
