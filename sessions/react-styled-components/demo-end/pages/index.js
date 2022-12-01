import InfoBox from "../components/InfoBox";
import StyledButton from "../components/StyledButton";
import StyledContainer from "../components/StyledContainer";
import StyledDangerButton from "../components/StyledDangerButton";
import StyledLink from "../components/StyledLink";

export default function HomePage() {
  return (
    <>
      <StyledContainer>
        <StyledButton>Click me</StyledButton>
        <StyledDangerButton>Delete something</StyledDangerButton>
      </StyledContainer>

      <StyledContainer>
        <p>
          This is a <StyledLink href="/">styled link</StyledLink>.
        </p>
      </StyledContainer>

      <StyledContainer>
        <StyledButton size="large">Click me</StyledButton>
        <StyledDangerButton size="large">Delete something</StyledDangerButton>
      </StyledContainer>

      <StyledContainer direction="column">
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
      </StyledContainer>
    </>
  );
}
