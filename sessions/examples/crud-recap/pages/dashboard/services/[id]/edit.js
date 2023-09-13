import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Flex from "@/components/Layout/Flex";
import Column from "@/components/Layout/Column";
import Loader from "@/components/Layout/Loader";
import ServiceForm from "@/components/Forms/ServiceForm";
import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import { updateService } from "@/lib/api";

export default function EditService() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: service,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/services/${id}` : null);

  async function onSubmit(data) {
    await updateService({ ...data, price: Number(data.price), id });
    mutate(`/api/services`);
    mutate(`/api/services/${id}`);
    router.push("/dashboard");
  }

  if (!service || isLoading) {
    return <Loader />;
  }

  return (
    <Column width="800px">
      <Flex padding="1rem" gap="2rem" direction="column">
        <BreadCrumbs>
          <Link href="/dashboard">Back to the Dashboard</Link>
        </BreadCrumbs>
        <h1>Edit Service</h1>
        <ServiceForm service={service} onSubmit={onSubmit} />
      </Flex>
    </Column>
  );
}
