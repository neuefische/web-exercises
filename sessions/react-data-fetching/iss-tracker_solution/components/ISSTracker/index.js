import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
    mutate,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  // Alternative Solution
  // function useCoords() {
  //   const { data, error, isLoading } = useSWR(URL, fetcher, {
  //     refreshInterval: 5000,
  //   });

  //   return {
  //     coords: data,
  //     isLoading,
  //     error,
  //   };
  // }

  // const { coords, isLoading, error } = useCoords();

  if (isLoading || !coords) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
