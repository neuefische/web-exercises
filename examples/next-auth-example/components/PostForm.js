export default function PostForm({ post = {}, onSubmit }) {
  function _onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={_onSubmit}>
      <label>
        Title
        <input
          defaultValue={post.title}
          name="title"
          required
          placeholder="Enter the post title"
        />
      </label>
      <label>
        Content
        <textarea
          rows={10}
          defaultValue={post.content}
          name="content"
          required
          placeholder="Enter the post content"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
