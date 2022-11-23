import { useState } from "react";
import "./App.css";
import Form from "./components/Form/index.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: nanoid(), ...newActivity }]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
