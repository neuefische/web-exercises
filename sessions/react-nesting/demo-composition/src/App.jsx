import Animal from "./components/Animal";
import AnimalCategory from "./components/AnimalCategory";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <main>
      <Header />
      <AnimalCategory title="Fluffy Fur">
        <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
        <Animal
          emoji="🐈"
          name="Mittens"
          description={<p>A playful kitten</p>}
        />
      </AnimalCategory>
      <AnimalCategory title="Waterproof">
        <Animal
          emoji="🐢"
          name="Archibald"
          description={
            <>
              <p>Super relaxed turtle</p>
              <ul>
                <li>Eats lettuce all the time</li>
                <li>Can sleep in your fridge</li>
              </ul>
            </>
          }
        />
      </AnimalCategory>
      <AnimalCategory title="Wingman">
        <Animal
          emoji="🐣"
          name="Chick Norris"
          description={<p>A nested chick</p>}
        />
      </AnimalCategory>
    </main>
  );
}
