import { useRouter } from 'next/router';
import { mutate } from 'swr';
import PostForm from '@/components/PostForm';

async function createPost(data) {
  return await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default function NewPage({ users }) {
  const router = useRouter();

  async function onSubmit(data) {
    try {
      await createPost(data);
      mutate('/api/posts');
      router.push('/');
    } catch (error) {
      console.log(error);
      alert('Error creating post');
    }
  }

  return (
    <>
      <h1>New Post</h1>
      <PostForm users={users} onSubmit={onSubmit} />
    </>
  );
}
