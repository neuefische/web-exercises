import useSWR from "swr";
import Flex from "../Layout/Flex";
import Grid from "../Layout/Grid";
import ServiceCard from "../ServiceCard";
import ActionLink from "../Layout/ActionLink";
import Loader from "@/components/Layout/Loader";

export default function Services({ limit = 20 }) {
  const { data: services, isLoading } = useSWR(
    `/api/services?${new URLSearchParams({ limit })}`
  );

  if (!services || isLoading) {
    return <Loader />;
  }

  return (
    <Flex gap="2rem" direction="column">
      <Grid gap="2rem">
        {services.length
          ? services.map((service) => (
              <ServiceCard
                key={service._id}
                {...service}
                actions={
                  <ActionLink href={`/services/${service._id}`}>
                    Read More
                  </ActionLink>
                }
              />
            ))
          : "No services yet."}
      </Grid>
    </Flex>
  );
}
