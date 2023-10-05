import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import Footer from "@/components/Footer";
import fetcher from "@/lib/fetcher";
import { PlacesProvider } from "@/contexts/places";
import GlobalStyle from "../styles";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

const MapWrapper = styled.div`
  flex: 1;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 400px;
  background-color: #e4c1f9;
  height: 100vh;
  overflow: auto;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <PlacesProvider>
          <GlobalStyle />
          <Flex $flex={1} $gap={0}>
            <Sidebar>
              <Component {...pageProps} />
              <Footer />
            </Sidebar>
            <MapWrapper>
              <MapView />
            </MapWrapper>
          </Flex>
        </PlacesProvider>
      </SWRConfig>
    </>
  );
}
