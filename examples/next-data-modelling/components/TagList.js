import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function TagList({ tags = [], onChange }) {
  const [name, setName] = useState('');

  function remove(_id) {
    onChange(tags.filter((x) => x._id !== _id));
  }

  function add() {
    if (!name) {
      return;
    }
    onChange([...tags, { name, _id: nanoid() }]);
    setName('');
  }

  return (
    <div className="tag-list">
      <span>Tags</span>
      <div>
        {tags.length ? (
          <ul>
            {tags.map(({ _id, name }) => (
              <li key={_id}>
                {name}
                <button type="button" onClick={() => remove(_id)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <input
          placeholder="Add new tag"
          value={name}
          onInput={(event) => setName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              add();
            }
          }}
        />
        <button type="button" onClick={add}>
          Add Tag
        </button>
      </div>
    </div>
  );
}
