import styled from "styled-components";

export const Button = ({ setProduct, produkt, productToBuy }) => {
  return (
    <StyledButton
      onClick={() => {
        setProduct(produkt);
        console.log(productToBuy);
      }}
    >
      Buy
    </StyledButton>
  );
};

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: hotpink;
  padding: 0.5rem;
`;
