# Part 2 - Hints

<details>
<summary>💡 Hint: State </summary>

Placing a state only where its needed can reduce complexity a lot.

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
