export default function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Enter search term:</label>
      <input name="searchTerm" id="searchTerm" />
      <button>🔍 Search</button>
    </form>
  );
}
