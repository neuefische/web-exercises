import { volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router.js";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
      <button
        type="button"
        onClick={() => {
          const randomVolume = getRandomElement(volumes);
          router.push(`/volumes/${randomVolume.slug}`);
        }}
      >
        Go to random volume
      </button>
    </div>
  );
}
