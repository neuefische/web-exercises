import InfoBox from "../components/InfoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <Container>
        <Button>Click me</Button>
        <Button color="danger">Click me not</Button>
      </Container>

      <Container>
        <p>
          This is a <Link href="/"> link</Link>.
        </p>
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
