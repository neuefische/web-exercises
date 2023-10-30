import { useRouter } from "next/router";
import { mutate } from "swr";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "ml_default";

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );
  const { url, width, height } = await response.json();
  return { url, width, height };
}

async function createPost(data) {
  return await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function NewPage() {
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const cover = await uploadImage(event.target.cover.files[0]);

      await createPost({
        ...Object.fromEntries(new FormData(event.target)),
        cover,
      });

      mutate("/api/posts");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Error creating post");
    }
  }

  return (
    <>
      <h1>New Post</h1>
      <form onSubmit={onSubmit}>
        <label>
          Title
          <input name="title" required placeholder="Enter the post title" />
        </label>
        <label>
          Cover
          <input name="cover" type="file" required />
        </label>
        <label>
          Content
          <textarea
            name="content"
            required
            placeholder="Enter the post content"
          />
        </label>
        <button>Create Post</button>
      </form>
    </>
  );
}
