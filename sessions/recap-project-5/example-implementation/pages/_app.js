import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        addComment={addComment}
      />
    </Layout>
  );
}
