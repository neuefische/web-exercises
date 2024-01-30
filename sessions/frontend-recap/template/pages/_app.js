import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { nanoid } from "nanoid";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useState(data);

  return (
    <>
      <Nav />
      <main>
        <Component recipes={recipes} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
