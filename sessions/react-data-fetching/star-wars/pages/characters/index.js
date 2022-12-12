import Link from "next/link";
import Layout from "../../components/Layout/index";

export default function CharactersOverview() {
  return (
    <Layout>
      <h1>Character Overview</h1>
      <Link href="characters/luke-skywalker">Link to first character</Link>
    </Layout>
  );
}
