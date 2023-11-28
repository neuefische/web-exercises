import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession();
  return (
    <nav>
      <Link href="/">Home</Link>
      {!session ? (
        <button onClick={signIn}>Sign in</button>
      ) : (
        <>
          <Link href="/posts/mine">My Posts</Link>
          <Link href="/posts/new">New Post</Link>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </nav>
  );
}
