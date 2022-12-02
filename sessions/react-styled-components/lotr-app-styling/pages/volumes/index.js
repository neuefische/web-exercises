import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();

  function handleRandomBook() {
    const randomBook = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${randomBook.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandomBook}>
        Go to random book
      </button>
    </>
  );
}
