import styled from "styled-components";
import Volume from "../Volume";

const StyledVolumeList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  list-style-type: none;
`;

export default function VolumeList({ volumes }) {
  return (
    <StyledVolumeList>
      {volumes.map(({ slug, title, cover }) => (
        <li key={slug}>
          <Volume slug={slug} title={title} cover={cover} />
        </li>
      ))}
    </StyledVolumeList>
  );
}
