import styled, { css } from "styled-components";

export default function Card({
  title,
  description,
  minimumPrice,
  maximumPrice,
  important,
}) {
  return (
    <Article important={important}>
      <h2>{title}</h2>
      <p>{description}</p>
      <PriceContainer>
        <h3>Price Range:</h3>
        <Price important={important}>
          <span>{minimumPrice}</span> - <span>{maximumPrice}€</span>
        </Price>
      </PriceContainer>
    </Article>
  );
}

const Article = styled.article`
  background-color: var(--color-white);
  padding: 0.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-dark);
  box-shadow: var(--color-dark) 1.95px 1.95px 2.6px;
  ${({ important }) =>
    important &&
    css`
      background-color: var(--color-highlight);
      color: var(--color-white);
    `}
`;

const Price = styled.div`
  padding: 0.25rem;
  border-radius: 5px;
  background-color: var(--color-highlight);
  color: var(--color-white);
  ${({ important }) =>
    important &&
    css`
      background-color: var(--color-tertiary);
      font-size: 1.5rem;
    `}
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
