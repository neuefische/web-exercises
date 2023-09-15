# Backend MongoDB: Queries

In this challenge, you'll use MongoDB Compass to create a database and a collection of documents.

## Tasks

### Preparatory Steps

- Open the MongoDB Compass app on your device
- Create a connection to your local database (it should be `localhost:27017` by default).
- Create a new database called _spiced_.
- Within your _spiced_ database, create a collection called _students_.
- ⬇️ [Download the provided students' data here](./resources.zip?raw=true).
- Unpack the `resources.zip` and import the `data.json` file into your _students_ collection.

✨ You now have a set of students' objects you can work with!

### Queries

Open the _mongosh_ at the bottom of MongoDB Compass.

Switch to the _spiced_ database with the command `use spiced`.

Do the following queries:

> 💡 You always have to refer to the queried collection with `db.students.[queryMethod]`.

- Find **all** entries.
- Find **all** entries from `students` with `happiness` of `5`.
- Find **one** entry from `students` with `0` `points`.
- Insert **one** entry; use the following student object:

```js
{name: "Alex", age: 37, points: 17, happiness: 4}
```

- Insert **many** entries; use the following student objects:

```js
{name: "John", age: 23, points: 31, happiness: 3},
{name: "Jane", age: 24, points: 32, happiness: 4}
```

- Update **John's** `points` to `32`.
- Update the `happiness` of **all students** with `32` `points` to `5`.
- Delete **the student** with `0` `points`.
- Delete **students** with a `happiness` of `5`.
- Delete **all students**.

## Notes

- If your data is somehow corrupted, you can start fresh: just drop the collection (use the three dots `...` next to the collection's name) and import the `data.json` file again.
