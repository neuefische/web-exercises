import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { nanoid } from "nanoid";
import { filter } from "fuzzy";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: nanoid(), ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <List
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
