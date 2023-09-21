import Image from "next/image";
import Flex from "../Layout/Flex";
import Stars from "../Stars";
import styled from "styled-components";

const StyledRating = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  background-color: #b5e2fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Text = styled.span`
  text-transform: capitalize;
  font-style: italic;
`;

export default function Rating({ value, text, user }) {
  return (
    <StyledRating>
      <Flex gap="0.5rem" alignItems="center">
        <Avatar src={user.image} alt={user.name} width={30} height={30} />
        <strong>{user.name}</strong>
      </Flex>
      <Flex gap="0.5rem" alignItems="center">
        <Stars value={value} /> <Text>{text}</Text>
      </Flex>
    </StyledRating>
  );
}
