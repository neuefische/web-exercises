import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Form from "./components/Form";
import SortButton from "./components/SortButton";
import Flex from "./components/Flex";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Form />
        <Flex>
          <SortButton buttonText="All Entries" entryCount="3" active />
          <SortButton buttonText="Favorites" entryCount="1" />
        </Flex>
        <Entry
          date="FEB 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Entry
          date="FEB 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Entry
          date="FEB 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
