import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts/new">New Post</Link>
    </nav>
  );
}
