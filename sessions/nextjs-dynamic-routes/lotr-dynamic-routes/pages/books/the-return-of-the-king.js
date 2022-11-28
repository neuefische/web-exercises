import Image from "next/image";
import Link from "next/link";
import books from "../../lib/books.js";

export default function ReturnOfTheKing() {
  const currentBook = books[2];

  return (
    <>
      <h2>{currentBook.title}</h2>
      <p>{currentBook.description}</p>
      <Image
        src={currentBook.cover}
        alt={`cover image of ${currentBook.title}`}
        width={250}
        height={419}
      />
      <Link href="/books">Back to overview</Link>
    </>
  );
}
