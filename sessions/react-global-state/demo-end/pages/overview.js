import AppLayout from "./components/AppLayout";

export default function OverviewPage({
  animals,
  countSum,
  countAverage,
  dragonCount,
  handleAdd,
  handleSubtract,
}) {
  return (
    <AppLayout
      animals={animals}
      countSum={countSum}
      countAverage={countAverage}
      dragonCount={dragonCount}
      handleAdd={handleAdd}
      handleSubtract={handleSubtract}
    />
  );
}
