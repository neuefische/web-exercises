import styled from "styled-components";

const DetailItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

function DetailItem({ detailType, detailValue }) {
  return (
    <DetailItemWrapper>
      <dt>
        <strong>{detailType}</strong>
      </dt>
      <dd>{detailValue}</dd>
    </DetailItemWrapper>
  );
}

export default DetailItem;
