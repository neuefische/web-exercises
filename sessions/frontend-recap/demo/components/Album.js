import Link from "next/link";
import Image from "next/image";
import styles from "./Album.module.css";

export default function Album({ artist, title, cover, id }) {
  return (
    <article className={styles.album}>
      <Link href={`/albums/${id}`} className={styles.link}>
        <Image
          className={styles.cover}
          src={cover}
          alt={`${artist} - ${title}`}
          width={200}
          height={200}
        />
      </Link>
      <Link href={`/albums/${id}`} className={styles.link}>
        <span className={styles.artist}>{artist}</span>
        <span className={styles.title}>{title}</span>
      </Link>
    </article>
  );
}
