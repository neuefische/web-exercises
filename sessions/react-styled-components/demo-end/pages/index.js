import InfoBox from "../components/InfoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import DangerButton from "../components/DangerButton";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <Container>
        <Button>Click me</Button>
        <DangerButton>Delete something</DangerButton>
      </Container>

      <Container>
        <p>
          This is a <Link href="/"> link</Link>.
        </p>
      </Container>

      <Container>
        <Button size="large">Click me</Button>
        <DangerButton size="large">Delete something</DangerButton>
      </Container>

      <Container direction="column">
        <InfoBox title="This is an info" message="Read it carefully!" />
        <InfoBox
          title="It worked"
          message="You have done it!"
          variant="success"
        />
        <InfoBox
          title="Error"
          message="Something went wrong!"
          variant="error"
        />
      </Container>
    </>
  );
}
