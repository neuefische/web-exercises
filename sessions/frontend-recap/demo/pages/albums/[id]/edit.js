import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function EditPage({ getAlbum, editAlbum }) {
  const router = useRouter();
  const album = getAlbum(router.query.id);

  if (!album) {
    return "Loading...";
  }

  async function onSubmit(data) {
    editAlbum({ ...data, id: album.id });
    router.push(`/albums/${album.id}`);
  }

  return (
    <>
      <h1>Edit Album</h1>
      <Form onSubmit={onSubmit} album={album} />
    </>
  );
}
