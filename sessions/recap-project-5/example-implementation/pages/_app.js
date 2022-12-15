import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import { useImmerWithLocalStorage } from "../lib/hook/useImmerWithLocalStorage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerWithLocalStorage(
    "artPiecesInfo",
    []
  );
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  function handleClickToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const index = draft.findIndex((infoItem) => infoItem.slug === slug);
      if (index > -1) {
        draft[index].isFavorite = !draft[index].isFavorite;
      } else {
        draft.push({ slug, isFavorite: true });
      }
      return draft;
    });
  }

  function handleSubmitComment(newComment, slug) {
    updateArtPiecesInfo((draft) => {
      const index = draft.findIndex((infoItem) => infoItem.slug === slug);
      if (index > -1) {
        if (!draft[index].comments) {
          draft[index].comments = [];
        }
        draft[index].comments.push(newComment);
      } else {
        draft.push({ slug, comments: [newComment] });
      }
      return draft;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout pieces={data}>
        <Component
          {...pageProps}
          handleSubmitComment={handleSubmitComment}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          handleClickToggleFavorite={handleClickToggleFavorite}
        />
      </Layout>
    </>
  );
}
