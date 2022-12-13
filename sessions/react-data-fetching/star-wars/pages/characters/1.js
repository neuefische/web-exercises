import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  const id = 1;

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
