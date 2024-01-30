import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { nanoid } from "nanoid";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [albums, setAlbums] = useState(data);

  function getAlbum(id) {
    return albums.find((x) => x.id == id);
  }

  function addAlbum(album) {
    setAlbums((prev) => [...prev, { ...album, id: nanoid() }]);
  }

  function removeAlbum(id) {
    setAlbums((prev) => prev.filter((x) => x.id !== id));
  }

  function editAlbum(album) {
    setAlbums((prev) =>
      prev.map((x) => (x.id === album.id ? { ...x, ...album } : x))
    );
  }

  function toggleFavorite(id) {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === id ? { ...album, isFavorite: !album.isFavorite } : album
      )
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          albums={albums}
          getAlbum={getAlbum}
          addAlbum={addAlbum}
          removeAlbum={removeAlbum}
          editAlbum={editAlbum}
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
