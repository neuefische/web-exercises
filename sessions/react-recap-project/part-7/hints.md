# Part 7 - Hints

<details>
<summary>💡 Hint: Refactoring into Pages</summary>

Think about what parts of the App.js belong to the which page. Move these parts into that "page component" e.g.:

```js
// in pages/Home.js

export default function Home({???}){
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    //fetch featured albums!
  })

  return <AlbumList albums={albums} ...>
}
```

</details>

<details>
<summary>💡 Hint: Global State</summary>

There are states that need to be global, i.e. need to be accessed by the entire app. There must be placed into the App.js and passed to the pages via props:

```js
// in App.js

export default function App(){
  const [savedAlbumIds, setSavedAlbumIds] = useLocalStorageState(...);

  //...

  return <>
    <Home savedAlbumIds={savedAlbumIds} />
    //...
    <Search savedAlbumIds={savedAlbumIds} />
    //...
    <SavedAlbums savedAlbumIds={savedAlbumIds} />
  </>
}
```

</details>

<details>
<summary>💡 Hint: Switching Pages</summary>

You need a state which tracks the currently visible page. With this you can conditionally render only one of the three page components. (This is only one possible solution for disabling the not selected pages, there might be an even better solution!). The Navigation bar needs to be able to set the currentPage when one of its buttons are clicked.

```js
// in App.js

export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  //...

  return (
    <>
      {currentPage === "HOME" && <Home savedAlbumIds={savedAlbumIds} />}
      {currentPage === "SEARCH" && <Search savedAlbumIds={savedAlbumIds} />}
      //...
    </>
  );
}
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 7 Example Solution](https://github.com/neuefische/web-react-recap-project-solution/tree/part-7)

</details>
