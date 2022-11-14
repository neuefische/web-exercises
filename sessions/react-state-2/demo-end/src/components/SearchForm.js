export default function SearchForm({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    onSearch(event.target.searchTerm.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Enter search term:</label>
      <input name="searchTerm" id="searchTerm" />
      <button>🔍 Search</button>
    </form>
  );
}
