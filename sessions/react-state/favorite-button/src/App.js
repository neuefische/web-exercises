import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Entry from "./components/Entry";
import Form from "./components/Form";
import Sort from "./components/Sort";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App__main">
        <Form />
        <Button>Create</Button>
        <Sort />
        <Entry date="FEB 27, 2028" motto="Entry #3" notes="Some more text" />
        <Entry date="FEB 27, 2028" motto="Entry #1" notes="Some text" />
        <Entry date="FEB 27, 2028" motto="Entry #2" notes="Some other text" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
