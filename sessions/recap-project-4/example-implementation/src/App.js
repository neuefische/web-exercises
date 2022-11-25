import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: "hdz72hdne", name: "Cleanup kitchen", isForGoodWeather: false },
      { id: "kdei928ndhe", name: "Go for a walk", isForGoodWeather: true },
    ],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: null,
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.log("Something went wrong!");
          setWeather({
            temperature: "⁉️",
            condition: "⁉️",
            isGoodWeather: null,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [setWeather]);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
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
        {weather === null ? (
          "Ooops, looks like there is no weather at all!"
        ) : (
          <>
            <span>{weather.condition}</span>
            <span>{weather.temperature} °C</span>
          </>
        )}
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather?.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;