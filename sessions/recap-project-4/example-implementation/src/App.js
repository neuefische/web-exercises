import { useState } from "react";
import "./App.css";
import Form from "./components/Form/index.js";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
