import styled from "styled-components";

import { Btn } from "@/components/Button";

import React, { useState } from "react";

import myComponent from "@/components/myComponent1/myComponent.js";

const kosmetikProdukt = [
  {
    name: "Luminous Silk Foundation",
    brand: "Aurora",
    type: "Foundation",
    shade: "Porcelain",
    benefits: ["hydrating", "long-lasting", "lightweight"],
    price: "45€",
    size: "30ml",
  },
  {
    name: "Velvet Matte Lipstick",
    brand: "Bloom Beauty",
    type: "Lipstick",
    shade: "Crimson Red",
    benefits: ["moisturizing", "high pigment", "smudge-proof"],
    price: "32€",
    size: "15g",
  },
  {
    name: "Ultra Defined Mascara",
    brand: "Lash Luxe",
    type: "Mascara",
    shade: "Jet Black",
    benefits: ["volumizing", "lengthening", "curling"],
    price: "29€",
    size: "10ml",
  },
  {
    name: "Sunset Glow Blush",
    brand: "Cheek Chic",
    type: "Blush",
    shade: "Peach Shimmer",
    benefits: ["buildable", "natural-looking", "contains vitamin E"],
    price: "25€",
    size: "20g",
  },
  {
    name: "Golden Hour Highlighter",
    brand: "Gleam Glow",
    type: "Highlighter",
    shade: "Golden Peach",
    benefits: ["radiant finish", "long-wear", "blendable"],
    price: "38€",
    size: "18g",
  },
];

const StyledDiv = styled.div`
  background: plum;
  width: fit-content;
  margin: auto;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: purple;
`;

export default function HomePage({ setProduct, productToBuy }) {
  // const [products, setProducts] = useState();
  // hier später fetchen

  return (
    <>
      {/* vv funktioniert nicht */}
      <myComponent />
      <h1>My Cosmetics Store</h1>
      <div>
        {kosmetikProdukt &&
          kosmetikProdukt.map((produkt, index) => (
            <StyledDiv key={index}>
              <h1>Name: {produkt.name}</h1>
              <h2>Brand: {produkt.brand}</h2>
              <h3>Typ: {produkt.type}</h3>
              <p>Farbe: {produkt.shade}</p>
              <p>
                Vorteile:
                {produkt.benefits.map((p, index) => (
                  <>
                    <span>{p}, </span>
                  </>
                ))}
              </p>
              <p>
                <b style={{ color: "white" }}>{produkt.price}</b>
              </p>
              <p>produkt.size</p>
              <Btn
                setProduct={setProduct}
                produkt={produkt}
                productToBuy={productToBuy}
              />
            </StyledDiv>
          ))}
      </div>
    </>
  );
}
