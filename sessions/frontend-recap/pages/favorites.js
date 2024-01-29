import AlbumList from "@/components/AlbumList";

export default function AllPage({ albums = [] }) {
  const favoriteAlbums = albums.filter(({ isFavorite }) => isFavorite);
  return (
    <>
      <h1>Favourite Albums</h1>
      {!favoriteAlbums.length ? (
        <p>No favorite albums yet.</p>
      ) : (
        <>
          <p>Those are my fav albums!</p>
          <AlbumList albums={favoriteAlbums} />
        </>
      )}
    </>
  );
}
