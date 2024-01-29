import AlbumList from "@/components/AlbumList";

export default function IndexPage({ albums = [] }) {
  return (
    <>
      <h1>Frontend Recap</h1>
      {!albums.length ? (
        "No albums yet."
      ) : (
        <>
          <p>Those are my fav albums!</p>
          <AlbumList albums={albums} />
        </>
      )}
    </>
  );
}
