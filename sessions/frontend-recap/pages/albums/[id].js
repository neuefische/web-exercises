import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./[id].module.css";

export default function AlbumPage({ getAlbum, toggleFavorite, removeAlbum }) {
  const router = useRouter();
  const album = getAlbum(router.query.id);

  if (!album) {
    return "Loading...";
  }

  const { artist, title, cover, year, id, isFavorite } = album;

  function handleDelete() {
    if (!confirm("Are you sure?")) {
      return;
    }
    removeAlbum(id);
    router.push("/");
  }

  return (
    <article className={styles.page}>
      <h1>
        {artist} - {title}
      </h1>
      <time>{year}</time>
      <Image
        className={styles.cover}
        src={cover}
        width={400}
        height={400}
        alt={`${artist} - ${title}`}
      />
      <ul className={styles.actions}>
        <li>
          <Link className={styles.action} href={`/albums/${id}/edit`}>
            Edit
          </Link>
        </li>
        <li>
          <button className={styles.action} onClick={handleDelete}>
            Delete
          </button>
        </li>
        <li>
          <button className={styles.action} onClick={() => toggleFavorite(id)}>
            {isFavorite ? "Unfav" : "Fav"}
          </button>
        </li>
      </ul>
    </article>
  );
}
