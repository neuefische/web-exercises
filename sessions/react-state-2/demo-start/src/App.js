import SearchForm from "./components/SearchForm";
import "./styles.css";

export default function App() {
  const searchTerm = "";

  return (
    <main>
      <h1>Search</h1>
      <SearchForm />
      <h2>
        {searchTerm
          ? `Your result for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </main>
  );
}
