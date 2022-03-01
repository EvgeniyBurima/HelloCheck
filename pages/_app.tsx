import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import useHeaderType from '../hooks/useHeaderType';
// import { store } from '../store';
// import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout headerType={useHeaderType()}>
      {/*<Provider store={store}>*/}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      {/*</Provider>*/}
    </Layout>
  );
}

export default MyApp;
