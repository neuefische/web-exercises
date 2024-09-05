import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h1>React app example structure</h1>
        <p>Learn how to structure your React app.</p>
        <Button href="https://reactjs.org">Learn React</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
