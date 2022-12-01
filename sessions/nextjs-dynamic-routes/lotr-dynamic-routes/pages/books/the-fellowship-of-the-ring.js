import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function Fellowship() {
  const currentVolume = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");
  
  if (!currentVolume) {
    return null;
  }
  
  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
    </>
  );
}
