import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode,
}

function Layout({ children }: Props): JSX.Element {
  return (
    <div className="min-h-full flex flex-col text-base">
      <Head>
        <title>Check</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Check web application" />
      </Head>

      { children }
    </div>
  );
}

export default Layout;
