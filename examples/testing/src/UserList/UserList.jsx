import { formatUser } from "../utils";

export default function UserList({ users = [] }) {
  if (!users.length) {
    return <p>No users.</p>;
  }
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>{formatUser(user)}</li>
      ))}
    </ul>
  );
}
