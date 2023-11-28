# Part 2 - Hints

<details>
<summary>💡 Hint: fetching Data </summary>

fetching is an async task, so you need an async function for it and a state for the data to be stored after fetching is complete

```js
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //...
  }, []);
  //...
}
```

</details>

<details>
<summary>💡 Hint: Default Data</summary>

What should be the default data type for your album data? You need to make sure that you don't try to call `data.map(...)` on a data type that does not has a `.map` method.

</details>
