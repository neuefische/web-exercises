import "./List.css";

export default function List({ activities }) {
  return (
    <ul className="list" role="list">
      {activities.map((activity) => (
        <li key={activity.id} className="list__item">
          {activity.name}
        </li>
      ))}
    </ul>
  );
}
