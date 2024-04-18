# Part 4 - Hints

<details>
<summary>💡 Hint: Deleting Elements from Array State</summary>

Remember how to delete elements from a complex state:

```js
  const [state, setState] = useState([...])

  function handleDeleteItem(id) {
    const modifiedState = state.filter(item => item.id !== id)

    setState(modifiedState)
  }
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 4 Example Solution](https://github.com/neuefische-web-demos/theme-creator-example-solution/tree/part-4)

</details>
