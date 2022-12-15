import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  function handleClickToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const info = draft.find((info) => info.slug === slug);
      if (info) {
        info.isFavorite = !info.isFavorite;
      } else {
        draft.push({ slug, isFavorite: true });
      }
    });
  }

  function handleSubmitComment(newComment, slug) {
    updateArtPiecesInfo((draft) => {
      const info = draft.find((info) => info.slug === slug);
      if (info) {
        if (!info.comments) {
          info.comments = [];
        }
        info.comments.push(newComment);
      } else {
        draft.push({ slug, comments: [newComment] });
      }
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
