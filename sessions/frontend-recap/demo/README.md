# Frontend Recap

This app shows how to handle a list of favourite music albums in Next.js.

## Pages

Paths are relative to the `/pages` folder.

| File                | URL              | What it does                   |
|---------------------|------------------|--------------------------------|
| index.js            | /                | Displays all albums            |
| favorites.js        | /favorites       | Displays the favorite albums   |
| albums/[id].js      | /albums/:id      | Displays an album by given id  |
| albums/[id]/edit.js | /albums/:id/edit | Displays the edit album form   |
| albums/new.js       | /albums/new      | Displays the create album form |

## The `_app.js` actions

```jsx
import data from "../data.json";

export default function App({ Component, pageProps }) {
  // initialise the state with some fixed data
  const [albums, setAlbums] = useState(data);

  // define all needed actions
  function getAlbum(id) { ... }
  function addAlbum(album) { ... }
  function removeAlbum(id) { ... }
  function editAlbum(album) { ... }
  function toggleFavorite(id) { ... }

  // pass them down as props to all pages
  return (
    <Component
      albums={albums}
      getAlbum={getAlbum}
      addAlbum={addAlbum}
      removeAlbum={removeAlbum}
      editAlbum={editAlbum}
      toggleFavorite={toggleFavorite}
      {...pageProps}
    />
  );
}
```

Every page will mention what they need as props:

```jsx
// pages/albums/new.js
export default function NewPage({ addAlbum }) { ... }

// pages/index.js
export default function IndexPage({ albums = [] }) { ... }

// pages/favorites.js
export default function FavoritesPage({ albums = [] }) { ... }

// pages/albums[id].js
export default function AlbumPage({ getAlbum, toggleFavorite, removeAlbum }) { ... }

// pages/albums/[id]/edit.js
export default function EditPage({ getAlbum, editAlbum }) { ... }
```

## Forms

A single `<Form>` is reused in both the edit and the new view. If the `album` prop is passed, it populates the fields, otherwise they stay empty. The `onSubmit` prop function is called with the data from the user on submit:

```jsx
export default function Form({ onSubmit, album = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" defaultValue={album.title}
        />
      </label>
      // rest of the fields...
      <button>Submit</button>
    </form>
  );
}
```

Have fun!