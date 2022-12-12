import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <Link href="characters/luke-skywalker">Link to first character</Link>
    </Layout>
  );
}
