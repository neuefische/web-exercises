import Layout from "../components/Layout/Layout.styled";
import Alert from "../components/Alert";

export default function HomePage() {
  return (
    <Layout>
      <Alert />
      <Alert text="Help me, I'm light blue!" color={"#cfe2ff"} />
      <Alert text="A grey old wizard alert!" color={"#e2e3e5"} />
      <Alert
        text="The grass is always greener on the other side."
        color={"#d1e7dd"}
      />
    </Layout>
  );
}
