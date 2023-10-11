import { useState } from 'react';
import TagList from '@/components/TagList';

export default function PostForm({ users = [], post = {}, onSubmit }) {
  const [tags, setTags] = useState(post.tags || []);

  function _onSubmit(event) {
    event.preventDefault();
    onSubmit({
      ...Object.fromEntries(new FormData(event.target)),
      tags: tags.map(({ name }) => ({ name })),
    });
  }

  function handleChangeTags(newTags) {
    setTags(newTags);
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
        Author
        <select name="author" required defaultValue={post.author?._id}>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>

      <TagList tags={tags} onChange={handleChangeTags} />

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
