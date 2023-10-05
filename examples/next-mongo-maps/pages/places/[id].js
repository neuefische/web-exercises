import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import Loader from "@/components/Layout/Loader";
import { usePlaces } from "@/contexts/places";

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  aspect-ratio: 3/2;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export default function Place() {
  const router = useRouter();
  const { id } = router.query;
  const { data: place, isLoading } = useSWR(id ? `/api/places/${id}` : null);
  const { setPlaces, setCurrentPlace } = usePlaces();

  useEffect(() => {
    if (!place) {
      return;
    }
    setPlaces([place]);
    setCurrentPlace(place);
  }, [place]);

  if (!place || isLoading) {
    return <Loader />;
  }

  return (
    <Flex direction="column" padding="1rem" gap="2rem" flex={1}>
      <nav>
        <Link href="/">Back to places list</Link>
      </nav>
      <h1>{place.name}</h1>
      <StyledImage
        width={600}
        height={400}
        alt={`A view of ${place.name}`}
        src={place.image}
      />
      <p>{place.description}</p>
    </Flex>
  );
}
