import useSWR from "swr";
import Link from "next/link";

export default function IndexPage() {
  const { data: posts, isLoading } = useSWR("/api/posts");

  if (!posts || isLoading) {
    return "Loading...";
  }

  return (
    <>
      <h1>Cloudinary Demo</h1>
      {!posts.length ? (
        "No posts yet."
      ) : (
        <>
          <p>Those are some fake blog posts</p>
          <ul>
            {posts.map(({ _id, title }) => (
              <li key={_id}>
                <Link href={`/posts/${_id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
