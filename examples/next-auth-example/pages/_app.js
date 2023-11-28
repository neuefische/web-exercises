import { SWRConfig } from 'swr';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import fetcher from '../lib/fetcher';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </SessionProvider>
    </SWRConfig>
  );
}
