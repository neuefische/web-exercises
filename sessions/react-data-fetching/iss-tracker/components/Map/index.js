import { MapContainer, MapImage, MapISS } from "./Map.styled";

export default function Map({ longitude, latitude }) {
  const [x, y] = positionToMapCoordinates(longitude, latitude);

  return (
    <MapContainer className="Map">
      <MapImage
        className="Map__image"
        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
        alt="a map of the world"
        fill
      />
      <MapISS
        className="Map__ISS"
        style={{
          top: y,
          left: x,
        }}
      ></MapISS>
    </MapContainer>
  );
}

function positionToMapCoordinates(long, lat) {
  const x = `${((long + 180) % 360) / 3.6}%`;
  const y = `${50 - lat / 1.8}%`;
  return [x, y];
}
