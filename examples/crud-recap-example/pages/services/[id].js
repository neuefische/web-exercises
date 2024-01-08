import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Flex from "@/components/Layout/Flex";
import Column from "@/components/Layout/Column";
import Cover from "@/components/Layout/Cover";
import Avatar from "@/components/Layout/Avatar";
import Card from "@/components/Layout/Card";
import Loader from "@/components/Layout/Loader";
import ActionButton from "@/components/Layout/ActionButton";
import ReactMarkdown from "react-markdown";

const StyledMarkdown = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  > * {
    margin: 0;
  }
  & p,
  & ul {
    line-height: 1.616;
  }
  & ul {
    padding: 0 1rem;
  }
`;

function getAvatarURL(offerer) {
  return `https://dummyimage.com/75x75/48cae4/fff&text=${(offerer || "J")[0]}`;
}

export default function Service() {
  const router = useRouter();
  const { id } = router.query;
  const { data: service, isLoading } = useSWR(
    id ? `/api/services/${id}` : null
  );

  if (!service || isLoading) {
    return <Loader />;
  }

  const { name, price, offerer, description, image } = service;

  return (
    <Column width="700px" padding="1rem">
      <Card padding="2rem" direction="column" gap="2rem">
        <Flex as="header" direction="column" gap="1.5rem">
          <Flex as="h1" justifyContent="space-between" flex={1}>
            <span>{name}</span>
            <span>{price}$</span>
          </Flex>
          <Cover width={700} alt={name} src={image} />
          <Flex alignItems="center" gap="0.5rem" pushLast>
            Offered by
            <Avatar offerer={offerer} size={40} />
            <strong>{offerer}</strong>
            <Flex>
              <ActionButton>Book Now!</ActionButton>
            </Flex>
          </Flex>
        </Flex>
        <h2>Service Details</h2>
        <StyledMarkdown>{description}</StyledMarkdown>
      </Card>
    </Column>
  );
}
