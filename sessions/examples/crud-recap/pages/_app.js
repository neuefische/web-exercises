import { SWRConfig } from "swr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GlobalStyle from "../styles";
import fetcher from "@/lib/fetcher";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  );
}
