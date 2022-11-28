import Link from "next/link";

export default function Books() {
  return (
    <>
      <h2>Overview about all Books</h2>
      <ul>
        <li>
          <Link href="/books/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/books/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/books/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
