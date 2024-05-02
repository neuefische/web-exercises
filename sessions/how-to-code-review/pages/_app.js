import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  //Hier States
  const [productToBuy, setProduct] = useState();

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        setProduct={setProduct}
        productToBuy={productToBuy}
      />
    </>
  );
}
