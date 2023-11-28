import useSWR from 'swr';
import Link from 'next/link';
import PostList from '@/components/PostList';

export default function IndexPage() {
  const { data: posts, isLoading } = useSWR('/api/posts');

  if (!posts || isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>Auth Example</h1>
      {!posts.length ? (
        'No posts yet.'
      ) : (
        <section>
          <h2>Recent Posts</h2>
          <PostList posts={posts} />
        </section>
      )}
    </>
  );
}
