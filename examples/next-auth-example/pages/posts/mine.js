import { useSession } from 'next-auth/react';
import PostList from '@/components/PostList';
import useSWR from 'swr';

export default function MyPosts() {
  const { data: posts, isLoading } = useSWR('/api/users/me/posts');
  if (!posts || isLoading) {
    return 'Loading...';
  }
  return (
    <>
      <h1>My Posts</h1>
      {!posts.length ? 'No posts yet.' : <PostList posts={posts} />}
    </>
  );
}
