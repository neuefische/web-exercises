import UserList from "./UserList/UserList";
import Counter from "./Counter/Counter";
import ConfirmButton from "./ConfirmButton/ConfirmButton";

const users = [
  { id: 1, email: "jane@doe.com", firstName: "Jane", lastName: "Doe" },
  { id: 2, email: "maria@maria.com", firstName: "Maria" },
  { id: 3, email: "john@doe.com" },
];

export default function App() {
  return (
    <main>
      <h1>Testing Examples</h1>
      <section>
        <h2>User List</h2>
        <UserList users={users} />
      </section>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>Confirm button</h2>
        <ConfirmButton
          label="Annihilate the universe"
          dialogText="Are you sure?"
          onCancel={() => alert("Phew!")}
          onConfirm={() => alert("It's over.")}
        />
      </section>
      <footer>&copy; 2023 ACME.</footer>
    </main>
  );
}
