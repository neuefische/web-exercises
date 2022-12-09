import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ countSum, dragonCount, countAverage }) {
  return (
    <>
      <CounterStats
        countSum={countSum}
        dragonCount={dragonCount}
        countAverage={countAverage}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
