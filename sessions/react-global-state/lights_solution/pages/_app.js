import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: true },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  function turnAllLightsOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function turnAllLightsOn() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  const lightsOnCount = lights.filter(({ isOn }) => isOn).length;

  return (
    <Layout isDimmed={lightsOnCount === 0}>
      <GlobalStyle />
      <Component
        lights={lights}
        toggleLight={toggleLight}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
        lightsOnCount={lightsOnCount}
        {...pageProps}
      />
    </Layout>
  );
}
