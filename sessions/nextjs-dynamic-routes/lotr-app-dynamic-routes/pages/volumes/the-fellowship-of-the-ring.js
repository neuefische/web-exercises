import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function Fellowship() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
    </>
  );
}
