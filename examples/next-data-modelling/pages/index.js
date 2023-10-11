import useSWR from 'swr';
import Link from 'next/link';

export default function IndexPage() {
  const { data: posts, isLoading } = useSWR('/api/posts');

  if (!posts || isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>Data Modelling</h1>
      {!posts.length ? (
        'No posts yet.'
      ) : (
        <>
          <p>Those are some fake blog posts</p>
          <ul className="post-list">
            {posts.map(({ _id, title, author }) => (
              <li key={_id}>
                <h2>
                  <Link href={`/posts/${_id}`}>{title}</Link>
                </h2>
                <p>
                  written by <strong>{author.name}</strong>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
