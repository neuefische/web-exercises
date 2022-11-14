import { useState } from "react";
import SearchForm from "./components/SearchForm";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm onSearch={handleSearch} />
      <h2>
        {searchTerm
          ? `Your result for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </main>
  );
}
