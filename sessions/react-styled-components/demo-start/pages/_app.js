<<<<<<< HEAD
import GlobalStyle from "../styles";
=======
import { GlobalStyle } from "../styles";
>>>>>>> b678b29 (add styled components demo)

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
