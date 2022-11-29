import Link from "next/link";
import books from "../../lib/books.js";

export default function Books() {
  return (
    <>
      <h2>Overview about all Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.slug}>
            <Link href={`/books/${book.slug}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
