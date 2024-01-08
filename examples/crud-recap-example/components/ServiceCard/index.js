import Card from "../Layout/Card";
import Cover from "../Layout/Cover";
import Avatar from "../Layout/Avatar";
import Flex from "../Layout/Flex";
import Link from "next/link";

export default function ServiceCard({
  _id,
  image,
  name,
  price,
  offerer,
  actions,
}) {
  return (
    <Card gap="1rem">
      <Flex as="h3" justifyContent="space-between">
        {name} <span>{price}$</span>
      </Flex>
      <Link href={`/services/${_id}`}>
        <Cover alt={name} src={image} />
      </Link>
      <Flex alignItems="center" gap="0.5rem" pushLast>
        <Avatar offerer={offerer} size={40} />
        <strong>{offerer}</strong>
        <Flex>{actions}</Flex>
      </Flex>
    </Card>
  );
}
