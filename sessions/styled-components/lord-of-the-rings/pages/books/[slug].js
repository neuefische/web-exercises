import Image from "next/image";
import Link from "next/link";
import books from "../../lib/books.js";
import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("books", books);
  console.log("slug", slug);

  const currentBook = books?.find((book) => book.slug === slug);

  if (!currentBook) {
    return null;
  }

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
