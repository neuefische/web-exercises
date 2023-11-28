import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import PostForm from '@/components/PostForm';

async function updatePost(id, data) {
  return await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default function EditPage({ users }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading } = useSWR(id ? `/api/posts/${id}` : null);

  if (!post || isLoading) {
    return 'Loading...';
  }

  async function onSubmit(data) {
    try {
      await updatePost(id, data);
      mutate('/api/posts');
      router.push(`/posts/${id}`);
    } catch (error) {
      console.log(error);
      alert('Error creating post');
    }
  }

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm post={post} users={users} onSubmit={onSubmit} />
    </>
  );
}
