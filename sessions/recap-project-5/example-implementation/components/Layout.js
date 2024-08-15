import Navigation from "./Navigation/index.js";
import styled from "styled-components";
import Head from "next/head.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;



const Headline = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {


  return (
    <Wrapper>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Headline>Art Gallery</Headline>
      <main>{children}</main>
      <Navigation />
    </Wrapper>
  );
}
