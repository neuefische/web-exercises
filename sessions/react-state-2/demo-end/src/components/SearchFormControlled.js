import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(searchFieldValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Enter search term:</label>
      <input
        name="searchTerm"
        id="searchTerm"
        value={searchFieldValue}
        onChange={(event) => {
          setSearchFieldValue(event.target.value);
        }}
      />
      <button>🔍 Search</button>
    </form>
  );
}
