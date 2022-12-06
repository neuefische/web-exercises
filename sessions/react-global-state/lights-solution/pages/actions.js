import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  lightsOnCount,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        lightsOnCount={lightsOnCount}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </>
  );
}
