import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: nanoid(), ...newActivity }]);
  }

  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
