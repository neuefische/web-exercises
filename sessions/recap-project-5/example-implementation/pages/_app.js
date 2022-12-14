import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/Layout.js";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  function handleClickToggleFavorite(slug) {
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

  function handleSubmit(newComment, slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const artPieceInfo = artPiecesInfo.find(
        (infoItem) => infoItem.slug === slug
      );

      if (artPieceInfo) {
        return artPiecesInfo.map((infoItem) =>
          infoItem.slug === slug
            ? { ...infoItem, comments: [...infoItem.comments, newComment] }
            : infoItem
        );
      }
      return [...artPiecesInfo, { slug, comments: [newComment] }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout pieces={data}>
        <Component
          {...pageProps}
          handleSubmit={handleSubmit}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          handleClickToggleFavorite={handleClickToggleFavorite}
        />
      </Layout>
    </>
  );
}
