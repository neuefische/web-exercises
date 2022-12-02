import styled from "styled-components";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import NavigationLink from "../NavigationLink";

const StyledVolumeNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  align-items: center;
`;

const LinkCaption = styled.span`
  font: var(--font-caption--italic);
`;

const LinkTitle = styled.span`
  font: var(--font-caption);
`;

const LinkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align = "start" }) => "flex-" + align};
`;

export default function VolumeNavigation({ previousVolume, nextVolume }) {
  return (
    <StyledVolumeNavigation>
      {previousVolume ? (
        <NavigationLink href={`/volumes/${previousVolume.slug}`}>
          <ArrowLeft />
          <LinkContentContainer>
            <LinkCaption>Previous Volume</LinkCaption>
            <LinkTitle>{previousVolume.title}</LinkTitle>
          </LinkContentContainer>
        </NavigationLink>
      ) : null}
      {nextVolume ? (
        <NavigationLink href={`/volumes/${nextVolume.slug}`} align="end">
          <LinkContentContainer align="end">
            <LinkCaption>Next Volume</LinkCaption>
            <LinkTitle>{nextVolume.title}</LinkTitle>
          </LinkContentContainer>
          <ArrowRight />
        </NavigationLink>
      ) : null}
    </StyledVolumeNavigation>
  );
}
