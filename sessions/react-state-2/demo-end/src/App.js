import { useState } from "react";
import SearchForm from "./components/SearchForm";
// import SearchForm from "./components/SearchFormControlled";
import SearchResults from "./components/SearchResults";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
