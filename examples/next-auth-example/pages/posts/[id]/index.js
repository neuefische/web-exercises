import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import Markdown from 'react-markdown';

export default function PostPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { id } = router.query;
  const { data: post, isLoading } = useSWR(id ? `/api/posts/${id}` : null);

  if (!post || isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>{post.title}</h1>
      <article>
        <header>
          Written by{' '}
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={32}
            height={32}
          />{' '}
          <strong>{post.author.name}</strong>{' '}
          {post.author._id === session?.id && (
            <Link href={`/posts/${id}/edit`}>(Edit)</Link>
          )}
        </header>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
}
