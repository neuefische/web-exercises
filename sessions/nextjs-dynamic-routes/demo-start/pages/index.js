import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Next.js Dynamic Routes</h1>
      <Link href="/movies">Go to movies overview</Link>
    </div>
  );
}
