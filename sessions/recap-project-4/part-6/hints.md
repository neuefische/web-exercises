# Part 6 - Hints

<details>
<summary>💡 Hint: Edit Elements in Array State</summary>

Remember how to edit elements in a complex state:

```js
  const [state, setState] = useState([...])

  function handleEditState(modifiedItem) {
    const modifiedState = state.map(item => {
      if(item.id !== modifiedItem.id) {
        return item
      }

      return modifiedItem
    })

    setState(modifiedState)
  }
```

</details>

<details>
<summary>💡 Hint: Reuse Form Component</summary>

To prevent repeating yourself, you can reuse the ThemeForm for editing forms:

```jsx
const defaultData = {
  name: '',
  colors: [...]
}

function ThemeForm({ onSubmit, initialData = defaultData, isEditMode }) {
  function handleSubmit(event) {
    // get data from event.target
    // get id from initialData or generate a new one
    // build theme from data and id
    onSubmit(theme);
  }

  return <>
    <h2>{isEditMode ? "Edit Theme" : "Add Theme"}</h2>
    <form onSubmit={handleSubmit}>
      <input ... defaultValue={initialData.name}/>
      ...
    </form>
}
```

```js
<ThemeForm onSubmit={handleAddTheme} /> // Add Mode
...
<ThemeForm onSubmit={handleEditTheme} defaultData={theme} isEditMode /> // Edit Mode
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 6 Example Solution](https://github.com/neuefische-web-demos/theme-creator-example-solution/tree/part-6)

</details>
