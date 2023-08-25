import Button from "../components/Button";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <Button>Click me</Button>

      <p>
        This is a <Link href="/"> link</Link>.
      </p>
    </>
  );
}
