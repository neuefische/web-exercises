import "./App.css";
import EntriesSection from "./components/EntriesSection/index";
import EntryForm from "./components/EntryForm/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
