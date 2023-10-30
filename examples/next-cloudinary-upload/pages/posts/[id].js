import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function PostPage() {
  const router = useRouter();
  const { data: post, isLoading } = useSWR(
    router.query.id ? `/api/posts/${router.query.id}` : null,
  );

  if (!post || isLoading) {
    return "Loading...";
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>
        <Image
          src={post.cover.url}
          width={post.cover.width}
          height={post.cover.height}
        />
      </p>
      <p>{post.content}</p>
    </>
  );
}
