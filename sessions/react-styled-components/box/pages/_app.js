import { GlobalStyle } from "../styles";
import "../components/BoxWithClassName/BoxWithClassName.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
