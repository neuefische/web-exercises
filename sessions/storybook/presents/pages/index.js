import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout/Layout.styled";
import Card from "../components/Card";
import { presents } from "../lib/data";

export default function HomePage() {
  return (
    <Layout>
      <Header>Ideas for Presents</Header>
      <main>
        <List>
          {presents.map(
            ({
              id,
              title,
              description,
              minimumPrice,
              maximumPrice,
              important,
            }) => (
              <ListItem key={id}>
                <Card
                  title={title}
                  description={description}
                  min={minimumPrice}
                  max={maximumPrice}
                  important={important}
                />
              </ListItem>
            )
          )}
        </List>
      </main>
      <Footer>This is an awesome and important footer!</Footer>
    </Layout>
  );
}

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-block: 0.5rem;
`;
