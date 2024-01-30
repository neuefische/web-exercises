import Album from "./Album";
import styles from "./AlbumList.module.css";

export default function AlbumList({ albums = [] }) {
  return (
    <ul className={styles.list}>
      {albums.map((album) => (
        <li key={album.id}>
          <Album {...album} />
        </li>
      ))}
    </ul>
  );
}
