# Part 7 - Hints

<details>
<summary>💡 Hint: Using CSS Variables</summary>

You can use css variables as long as they are set on a parent element of your current element:

```css
.parent {
  --my-color: hotpink;
}

.child {
  background-color: var(--my-color);
}
```

css variables can be added with inline styles as well!

```jsx
return (
  <main
    style={{
      "--my-color": "rebeccapurple",
    }}
  >
    ...
  </main>
);
```

</details>

<details>
<summary>💡 Hint: Switching Pages</summary>

You need a state which tracks the currently visible page. With this you can conditionally render only one page content. (This is only one possible solution for disabling the not selected pages, there might be an even better solution!).

```js

export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  //...

  return (
    <>
      {currentPage === "HOME" && <main> ... </main>}
      {currentPage === "TEST_PAGE" && <TestPage ... />}
    </>
  );
}
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 7 Example Solution](https://github.com/wd-bootcamp/theme-creator-example-solution/tree/part-7)

</details>
