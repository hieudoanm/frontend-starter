import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SockerProvider } from '../contexts/SocketProvider';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Starter</title>
      </Head>
      <SockerProvider>
        <Component {...pageProps} />
      </SockerProvider>
    </>
  );
};

export default App;
