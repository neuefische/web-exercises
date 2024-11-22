# Part 2 - Hints

<details>
<summary>💡 Hint: Local State </summary>

If a state is only needed in one component, it should be
kept local inside of that specific component.

```jsx
// bad:
function App() {
  const [showDetails,setShowDetails] = useState(false)
  //...

  <MyComponent showDetails={showDetails} />
}
```

```jsx
// better:
function MyComponent() {
  const [showDetails, setShowDetails] = useState(false);
  //...

  return showDetails ? <MyDetails /> : <MyPreview />;
}
```

</details>

<details>
<summary>💡 Hint: Conditional Visibility </summary>

You can use `ternary operators` inside your jsx:

```jsx
const isOpen = true;
//...
<section>{isOpen ? <p>I am visible!></p> : null}</section>;
```

```jsx
const isOpen = true;
//...
<section>{isOpen && <p>I am visible!></p>}</section>;
```

</details>

<details>
<summary>🔒 Example Solution </summary>
Only check this solution after giving this part a good try!

[🔗 Part 2 Example Solution](https://github.com/wd-bootcamp/theme-creator-example-solution/tree/part-2)

</details>
