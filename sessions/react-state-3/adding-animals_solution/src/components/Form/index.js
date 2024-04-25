import "./Form.css";

export default function Form({ onAddAnimal }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddAnimal(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Animal</h2>

      <div className="form__fields">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name of animal
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="emoji">
            Emoji
          </label>
          <input
            className="form__input form__input--emoji"
            list="emojis"
            id="emoji"
            type="text"
            name="emoji"
            maxLength={3}
            required
          />
          <datalist id="emojis">
            {animalEmojis.map((animalEmoji) => (
              <option key={animalEmoji} value={animalEmoji} />
            ))}
          </datalist>
        </div>

        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}

const animalEmojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🪱",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪰",
  "🪲",
  "🪳",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🦣",
  "🦛",
  "🐘",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🦙",
  "🦥",
  "🦨",
  "🦡",
  "🦦",
  "🦔",
  "🐻‍❄️",
];
