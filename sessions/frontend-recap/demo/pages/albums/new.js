import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPage({ addAlbum }) {
  const router = useRouter();

  async function onSubmit(data) {
    addAlbum(data);
    router.push("/");
  }

  return (
    <>
      <h1>New Album</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}
