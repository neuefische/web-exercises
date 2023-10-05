import { useEffect } from "react";
import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import Loader from "@/components/Layout/Loader";
import PlacesList from "@/components/PlacesList";
import { usePlaces } from "@/contexts/places";

export default function HomePage() {
  const { data: places, isLoading } = useSWR("/api/places");
  const { setPlaces, setCurrentPlace } = usePlaces();

  useEffect(() => {
    if (!places) {
      return;
    }
    setPlaces(places);
    setCurrentPlace(null);
  }, [places]);

  if (!places || isLoading) {
    return <Loader />;
  }

  return (
    <Flex direction="column" padding="1rem" gap="2rem" flex={1}>
      <h1>My Places</h1>
      <PlacesList places={places} />
    </Flex>
  );
}
