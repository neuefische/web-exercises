# Part 1 - Hints

<details>
<summary>💡 Hint: Props </summary>

Remember how to pass props into Components:

```js
function MyComponent({first, second,third}) {
  //...
}

<MyComponent first={true} second='two' third={3}>
```

</details>

<details>
<summary>💡 Hint: Arrays </summary>

You can transform an array of values into an array of Components:

```jsx
data.map(item => <MyComponent key={item.id} first={item.first} second={item.second} third={item.third}>)
```

</details>
