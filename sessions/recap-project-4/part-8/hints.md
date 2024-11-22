# Part 8 - Hints

<details>
<summary>💡 Hint: Controlled inputs</summary>
You can couple inputs by using a state which stores the value of both inputs:

```jsx
const [value, setValue] = useState(initialValue);

return <>
  <input
    class='input-1'
    ...
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
  <input
    class='input-2'
    ...
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
<>

```

</details>

<details>
<summary>💡 Hint: Efficient Fetching</summary>
Instead of fetching the color name when the color card is created, it is more efficient to fetch the name once when the color is edited or created:

```jsx
function App() {
  ...
  async function handleAddTheme(newTheme) {
    // fetch name for every color in colors array
    const promises = newTheme.colors.map(async color => {
      const response = await fetch(url)
      const data = await response.json()

      return {
        ...color,
        name: data.name.value
      }
    })

    // await all promises
    const colorsWithName = await Promise.all(promises);

    setThemes([{...newTheme,colors: colorsWithName},...themes])

  }

  async function handleEditTheme(modifiedTheme) {
    // fetch name for every color in colors array
    ...

  }

}
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 8 Example Solution](https://github.com/wd-bootcamp/theme-creator-example-solution/tree/part-8)

</details>
