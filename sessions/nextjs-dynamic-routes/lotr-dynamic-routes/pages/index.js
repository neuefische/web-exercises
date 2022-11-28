import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Link href="/books">Go to all books</Link>
    </div>
  );
}
