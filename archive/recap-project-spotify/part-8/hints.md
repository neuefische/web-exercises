# Part 8 - Hints

<details>
<summary>💡 Hint: Handling Offset</summary>
You need a new state for saving the Offset. Use this offset in your useEffect to pass the offset to the search endpoint:

```js
const [offset, setOffset] = useState(0);

//...

useEffect(
  () =>
    async function fetchData() {
      const response = await fetch(
        `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${query}&offset=${offset}`
      );
    },
  [offset]
);
```

</details>
<details>
<summary>💡 Hint: Appending new Values</summary>
Don't overwrite the first entries when appending the new albums to the list:

```js
setAlbums([...albums, ...receivedAlbums]);
```

</details>
<details>
<summary>💡 Hint: Resetting Offset</summary>
Reset the offset when submitting the form:

```js
function handleSubmit(query) {
  setOffset(0);
  //...
}

useEffect(
  () =>
    async function fetchData() {
      const response = await fetch(
        `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${query}&offset=${offset}`
      );
    },
  [offset]
);
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 8 Example Solution](https://github.com/wd-bootcamp/web-react-recap-project-solution/tree/part-8)

</details>
