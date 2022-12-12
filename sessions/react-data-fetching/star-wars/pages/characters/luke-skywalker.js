import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  return (
    <Layout>
      <Card
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
