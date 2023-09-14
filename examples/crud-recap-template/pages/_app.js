import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import fetcher from "@/lib/fetcher";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
