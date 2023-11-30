# Part 5 - Hints

<details>
<summary>💡 Hint: save state for an album</summary>
The AlbumCard needs two new props: `isSaved` and `onToggleSaveAlbum`. By using the first one you can change the appearance of the save button based on the save state:

```js
// in AlbumCard
//...
return <section>
  {
    isSaved
      ? // display save button in "saved" mode
      : // display default save button
  }
  //...
</section>
```

</details>

<details>
<summary>💡 Hint: figuring out an albums save state</summary>

There are many ways to achieve this. The example solution uses a single function to toggle between the saving and removing based on the current save state of the album. Keep in mind that solutions with two function "SavedAlbum" and "removeAlbum" is possible and perfectly fine as well.

```js
// in App.js
function toggleSaveAlbum(id) {
  const isSaved = savedAlbumIds.includes(id);

  if (isSaved) {
    // album is saved at the moment => remove it from list
    const updatedList = savedAlbumIds.filter((savedId) => savedId !== id);
    setSavedAlbumIds(updatedList);
  } else {
    // album is not saved at the moment => add it to the list
    const updatedList = [id, ...savedAlbumIds];
    setSavedAlbumIds(updatedList);
  }
}
// ...

<AlbumList ... onToggleSaveAlbum={toggleSaveAlbum}/>
```

</details>

<details>
<summary>💡 Hint: fetching saved albums</summary>

Every time the savedAlbumIds array changes, the savedAlbums need to be fetched from the new endpoint. This can be done with a second useEffect! The savedAlbumIds must be included in the dependency array to trigger the useEffect whenever the array changes.

```js
const [savedAlbumIds, setSavedAlbumIds] = useState([]);
const [savedAlbums, setSavedAlbums] = useState([]);

useEffect(() => {
  async function fetchSavedAlbums() {
    const response = await fetch(
      `https://neuefische-spotify-proxy.vercel.app/api/albums?ids=${JSON.stringify(
        savedAlbumIds
      )}`
    );
    // save received data in state savedAlbums
  }
  fetchSavedAlbums();
}, [savedAlbumIds]);
```

</details>

<details>
<summary>💡 Hint: adding / removing albums from savedAlbumIds</summary>

Every time the savedAlbumIds array changes, the savedAlbums need to be fetched from the new endpoint. This can be done with a second useEffect! The savedAlbumIds must be included in the dependency array to trigger the useEffect whenever the array changes.

```js
const [savedAlbumIds, setSavedAlbumIds] = useState([]);
const [savedAlbums, setSavedAlbums] = useState([]);

useEffect(() => {
  async function fetchSavedAlbums() {
    const response = await fetch(
      `https://neuefische-spotify-proxy.vercel.app/api/albums?ids=${JSON.stringify(
        savedAlbumIds
      )}`
    );
    // save received data in state savedAlbums
  }
  fetchSavedAlbums();
}, [savedAlbumIds]);
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 5 Example Solution](https://github.com/neuefische/web-react-recap-project-solution/tree/part-5)

</details>
