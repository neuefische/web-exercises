import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // store the initial data in the state
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
