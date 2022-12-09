import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <CounterStats />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
