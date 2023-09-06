import styled from "styled-components";

const Button = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;

const Link = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

export default function HomePage() {
  return (
    <>
      <Button>Click me</Button>

      <p>
        This is a <Link href="/">link</Link>.
      </p>
    </>
  );
}
