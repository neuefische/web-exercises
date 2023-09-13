import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import Grid from "@/components/Layout/Grid";
import ServiceCard from "@/components/ServiceCard";
import ActionLink from "@/components/Layout/ActionLink";
import ActionButton from "@/components/Layout/ActionButton";
import Loader from "@/components/Layout/Loader";
import { deleteService } from "@/lib/api";

export default function Dashboard() {
  const { data: services, isLoading, mutate } = useSWR("/api/services");

  if (!services || isLoading) {
    return <Loader />;
  }

  async function onDelete(id) {
    if (!confirm("Are you sure you want to delete this service?")) {
      return;
    }
    await deleteService(id);
    mutate();
  }

  return (
    <Flex padding="1rem" gap="2rem" direction="column">
      <Flex as="header" direction="column">
        <h1>Dashboard</h1>
        <span>Welcome back!</span>
        <Flex>
          <ActionLink href="/dashboard/services/create">Add Service</ActionLink>
        </Flex>
      </Flex>
      <Flex gap="2rem" direction="column">
        <h2>All Services</h2>
        <Grid gap="2rem">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              {...service}
              actions={
                <>
                  <ActionLink href={`/dashboard/services/${service._id}/edit`}>
                    Edit service
                  </ActionLink>
                  <ActionButton
                    type="danger"
                    onClick={() => onDelete(service._id)}
                  >
                    Delete service
                  </ActionButton>
                </>
              }
            />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
