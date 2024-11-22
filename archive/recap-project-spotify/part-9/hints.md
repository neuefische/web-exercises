# Part 9 - Hints

<details>
<summary>💡 Hint: Fetching Saved Tracks</summary>
Similar to the saved albums you need to persist a list of the savedTrackIds first and fetch the tracks later with the new endpoint.

```js
const [savedTrackIds,setSavedTrackIds] = useLocalStorageState(...)
// ...
const [savedTracks,setSavedTracks] = useState(...)

// ...
useEffect(() => {
  // fetch tracks
  setSavedTracks(receivedData)
})

```

</details>

<details>
<summary>💡 Hint: Toggling Saved Track </summary>

You need a function to toggle the saved state of each track and pass it down to the "SongList" component:

```js
function toggleSaveTrack(id) {
  const isTrackSaved = //... check if id is in list
  if (isTrackSaved) {
    // remove id from list
  } else {
    // add id to list
  }
}
```

Pass this function from App.js to Songlist: App => pageComponent => AlbumList => AlbumCard => SongList

</details>

<details>
<summary>💡 Hint: Is Track Saved ?</summary>

Your button for saving the track to the list has to know if the track is currently saved. You need to pass this information to the button from your App.js.

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 9 Example Solution](https://github.com/wd-bootcamp/web-react-recap-project-solution/tree/part-9)

</details>
