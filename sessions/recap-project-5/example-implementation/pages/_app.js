import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const artPieceInfo = artPiecesInfo.find(
        (infoItem) => infoItem.slug === slug
      );

      if (artPieceInfo) {
        return artPiecesInfo.map((infoItem) =>
          infoItem.slug === slug
            ? { ...infoItem, isFavorite: !infoItem.isFavorite }
            : infoItem
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  function handleSubmitComment(newComment, slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const artPieceInfo = artPiecesInfo.find(
        (infoItem) => infoItem.slug === slug
      );

      if (artPieceInfo) {
        return artPiecesInfo.map((infoItem) =>
          infoItem.slug === slug
            ? {
                ...infoItem,
                comments: [...(infoItem.comments ?? []), newComment],
              }
            : infoItem
        );
      }
      return [...artPiecesInfo, { slug, comments: [newComment] }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          handleSubmitComment={handleSubmitComment}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
