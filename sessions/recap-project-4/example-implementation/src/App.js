import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: null,
  });
  console.log(weather);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch("api to implement");
        if (response.ok) {
          setWeather({ temperatur: 13, condition: "🌞", isGoodWeather: true });
        } else {
          console.log("Something went wrong!");
          setWeather({ temperatur: 13, condition: "🌧️", isGoodWeather: false });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeather();
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === weather.isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: nanoid(), ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <h1 className="App__heading">
        <span>{weather.condition}</span>
        <span>{weather.temperatur}</span>
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
