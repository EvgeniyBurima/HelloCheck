import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../header';

interface LayoutProps {
  children: ReactNode,
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="h-screen bg-steel-50 flex flex-col">
      <Head>
        <title>Check</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Check web application" />
      </Head>

      <Header />

      <main className="row-auto mt-[1px] flex flex-col justify-center items-center">
        { children }
      </main>
    </div>
  );
}

export default Layout;
