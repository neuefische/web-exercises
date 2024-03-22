# Part 3 - Hints

<details>
<summary>💡 Hint: Accessing Form Data</summary>

You can access the values of your form with the "name" attribute:

```jsx

return (
  <form onSubmit={handleSubmit}>
    <input name='primary' ... />
    <input name='secondary' ... />
  ...
  </form>
)

```

```jsx
function handleSubmit(event) {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const primary = data.primary;
  const secondary = data.secondary;
}
```

</details>

<details>
<summary>💡 Hint: Theme Data Structure</summary>

Make sure that the new Theme as the same data structure as the other themes:

```js
const newTheme = {
  id: string,
  name: string,
  colors: [
    {
      role: string,
      value: string,
    },
    {
      role: string,
      value: string,
    },
    ...
  ]
}
```

</details>

<details>
<summary>💡 Hint: Adding elements to Array state</summary>

remember how to add elements to a complex state:

```js
  const [state, setState] = useState([...])

  function handleAddTheme(newItem) {
    setState([...state,newItem])
  }
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 3 Example Solution](https://github.com/neuefische-web-demos/theme-creator-example-solution/tree/part-3)

</details>
