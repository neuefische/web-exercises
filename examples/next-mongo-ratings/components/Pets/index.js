import useSWR from "swr";
import Flex from "../Layout/Flex";
import Column from "../Layout/Column";
import Grid from "../Layout/Grid";
import PetCard from "../PetCard";
import ActionLink from "../Layout/ActionLink";
import Loader from "@/components/Layout/Loader";
import useLocalRatings from "@/hooks/useLocalRatings";

export default function Pets({ limit = 20 }) {
  const { data: pets, isLoading } = useSWR(
    `/api/pets?${new URLSearchParams({ limit })}`
  );

  const { isPetRated } = useLocalRatings();

  if (!pets || isLoading) {
    return <Loader />;
  }

  return (
    <Column width="1200px">
      <Grid gap="2rem">
        {pets.length
          ? pets.map((pet) => (
              <PetCard
                rated={isPetRated(pet._id)}
                key={pet._id}
                {...pet}
                actions={
                  <ActionLink href={`/pets/${pet._id}`}>See Ratings</ActionLink>
                }
              />
            ))
          : "No pets yet."}
      </Grid>
    </Column>
  );
}
