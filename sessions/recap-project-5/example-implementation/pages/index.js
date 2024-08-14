import Head from "next/head.js";
import Spotlight from "../components/Spotlight/index.js";
import { useState, useEffect } from "react";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [spotlightPiece, setSpotlight] = useState(null);
  useEffect(() => {
    console.log("useEffekt");
    setSpotlight(pieces[Math.floor(Math.random() * (pieces.length - 1))]);
  }, [pieces]);

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
