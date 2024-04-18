import Form from "@/components/Form";
import StyledLink from "@/components/StyledLink";

export default function CreatePage({ handleAddPlace }) {
  return (
    <>
      <StyledLink href="/">&larr; Back to Homepage</StyledLink>
      <Form onSubmit={handleAddPlace} />
    </>
  );
}
