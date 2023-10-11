import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Markdown from 'react-markdown';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading } = useSWR(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  if (!post || isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>{post.title}</h1>
      <article>
        <p>
          Written by <strong>{post.author.name}</strong> (
          <Link href={`/posts/${id}/edit`}>Edit</Link>)
        </p>
        <div>
          Tags:{' '}
          <ul>
            {post.tags.map(({ _id, name }) => (
              <li key={_id}>{name}</li>
            ))}
          </ul>
        </div>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
}
