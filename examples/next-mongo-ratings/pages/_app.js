import useSWR, { SWRConfig } from "swr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GlobalStyle from "../styles";
import fetcher from "@/lib/fetcher";

export default function App({ Component, pageProps }) {
  // This fakes a login mechanism by retrieving the last created user every time,
  // and by storing it into the whole app state.
  // A proper way of doing it would be to go through a login page with a form
  // where the user could input their credentials, but that would be beyond the scope of this example.
  //
  // TL;DR we just need the user._id to send over when creating a rating!
  const { data: user } = useSWR("/api/users/login", fetcher);
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} user={user} />
        <Footer />
      </SWRConfig>
    </>
  );
}
