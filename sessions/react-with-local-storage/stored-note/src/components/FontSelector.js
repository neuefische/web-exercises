import "./FontSelector.css";

export default function FontSelector({ font, onFontChange }) {
  return (
    <select
      className="font-selector"
      value={font}
      onChange={(e) => onFontChange(e.target.value)}
      title="Select a font"
    >
      <option value="system-ui">System</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
      <option value="fantasy">Fantasy</option>
      <option value="cursive">Cursive</option>
      <option value="'Chalkduster'">Chalkduster</option>
      <option value="'Futura'">Futura</option>
      <option value="'Herculanum'">Herculanum</option>
      <option value="'Zapfino'">Zapfino</option>
    </select>
  );
}
