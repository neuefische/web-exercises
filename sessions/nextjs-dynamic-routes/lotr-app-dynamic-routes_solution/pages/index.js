import { volumes } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];

  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
      <Link href={`/volumes/${randomVolume.slug}`}>Go to a random volume</Link>
    </div>
  );
}
