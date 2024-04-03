# Part 5 - Hints

<details>
<summary>💡 Hint: fetching data </summary>

Remember how to fetch data in javascript:

```js
async function fetchData() {
  const repsonse = await fetch(url);
  const data = await reponse.json();
  // do something with data...
}
```

</details>

<details>
<summary>💡 Hint: fetching in React </summary>

fetching is an async task, so you need an async function for it and a state for the data to be stored after fetching is complete

```js
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch data...
    setData(fetchedData);
  }, []);
  //...
}
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 5 Example Solution](https://github.com/neuefische-web-demos/theme-creator-example-solution/tree/part-5)

</details>
