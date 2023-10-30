import { SWRConfig } from "swr";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import fetcher from "../lib/fetcher";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </SWRConfig>
  );
}
