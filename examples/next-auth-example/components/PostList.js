import Link from 'next/link';

export default function PostList({ posts = [] }) {
  return (
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
  );
}
