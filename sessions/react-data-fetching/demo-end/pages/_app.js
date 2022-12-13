import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
