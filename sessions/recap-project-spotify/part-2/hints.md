# Part 2 - Hints

<details>
<summary>💡 Hint: State </summary>

If you only place a state where it is needed, you can significantly reduce complexity.

```js
function App() {
  const [albumStates,setAlbumStates] = useState([false,false,false,...])
  //...
}
```

or

```js
function AlbumCard() {
  const [showList, setShowList] = useState(false);
  //...
}
```

Which one is better?

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

[🔗 Part 2 Example Solution](https://github.com/neuefische/web-react-recap-project-solution/tree/part-2)

</details>
