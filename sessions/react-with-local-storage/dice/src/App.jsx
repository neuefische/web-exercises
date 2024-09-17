import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <main className="app__main">
        <D6Button />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
