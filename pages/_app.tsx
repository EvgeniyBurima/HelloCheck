import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
