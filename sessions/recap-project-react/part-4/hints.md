# Part 4 - Hints

<details>
<summary>💡 Hint: Handling Form Data </summary>

Remember how to get data from a form. You can use either `new FormData` or select the value from the input form directly.

```js
function handleSubmit(event) {
  //...
  const data = new FormData(event.target);
  //...
  const inputValue = event.target.elements.inputName.value;
}
```

</details>

<details>
<summary>💡 Hint: SearchBar Parameters</summary>

Which parameters does your Search Bar Component need? Where do you need to store the search query and fetch the data?

```js
function SearchBar({onSubmit}) {
  //...
  return <form onSubmit={onSubmit}>
}
```

</details>

<details>
<summary>💡 Hint: Updating List Title</summary>

There are many ways to dynamically update the AlbumList Title. One might to use a "hasBeenSearched" or "pageState" state which indicates whether a user has submitted the form:

```js
function App({onSubmit}) {
  const [hasSearched,setHasSearched] = useState(false);

  return (
    //...
    <AlbumList title={hasSearched ? 'Results' : 'Featured'} albums={...}>
  )
}
```

```js
function App({onSubmit}) {
  const [pageState,setPageState] = useState("FEATURED");

  return (
    //...
    <AlbumList title={pageState === "SEARCHED" ? 'Results' : 'Featured'} albums={...}>
  )
}
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 4 Example Solution](https://github.com/neuefische/web-react-recap-project-solution/tree/part-4)

</details>
