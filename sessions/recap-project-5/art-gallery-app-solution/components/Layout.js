import Navigation from "./Navigation/index.js";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router.js";
import Head from "next/head.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Headline>Art Gallery</Headline>
      <Main ref={scrollRef}>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
