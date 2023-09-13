import { mutate } from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Flex from "@/components/Layout/Flex";
import Column from "@/components/Layout/Column";
import ServiceForm from "@/components/Forms/ServiceForm";
import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import { createService } from "@/lib/api";

export default function CreateService() {
  const router = useRouter();
  async function onSubmit(data) {
    await createService({
      ...data,
      price: Number(data.price),
    });
    mutate(`/api/services`);
    router.push("/dashboard");
  }

  return (
    <Column width="800px">
      <Flex padding="1rem" gap="2rem" direction="column">
        <BreadCrumbs>
          <Link href="/dashboard">Back to the Dashboard</Link>
        </BreadCrumbs>
        <h1>Create Service</h1>
        <ServiceForm onSubmit={onSubmit} />
      </Flex>
    </Column>
  );
}
