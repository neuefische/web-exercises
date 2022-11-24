import "./Controls.css";

export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <div className="Controls">
      <output className="Controls__display">Lat: {latitude.toFixed(5)}</output>
      <output className="Controls__display">Lng: {longitude.toFixed(5)}</output>
      <button className="Controls__button" onClick={onRefresh} type="button">
        Refresh
      </button>
    </div>
  );
}
