import InfoBox from "../components/InfoBox";
import Navigation from "../components/Navigation";
import CounterList from "../components/CounterList";
import Link from "../components/Link";

export default function CountersPage() {
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList
        animals={animals}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />

      <InfoBox />

      <Navigation />
    </>
  );
}
