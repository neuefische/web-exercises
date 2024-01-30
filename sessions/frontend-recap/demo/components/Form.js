import styles from "./Form.module.css";

export default function Form({ onSubmit, album = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title
        <input
          name="title"
          required
          placeholder="Enter the album title"
          defaultValue={album.title}
        />
      </label>
      <label>
        Artist
        <input
          name="artist"
          required
          placeholder="Enter the album artist"
          defaultValue={album.artist}
        />
      </label>
      <label>
        Year
        <input
          name="year"
          type="number"
          required
          placeholder="Enter the album year"
          defaultValue={album.year}
        />
      </label>
      <label>
        Cover
        <input
          name="cover"
          type="url"
          required
          placeholder="Enter the album cover"
          defaultValue={album.cover}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
