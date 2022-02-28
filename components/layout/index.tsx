import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../header';
import { HeaderType } from '../../hooks/useHeaderType';

interface LayoutProps {
  children: ReactNode,
  headerType: HeaderType,
}

function Layout({ children, headerType }: LayoutProps): JSX.Element {
  return (
    <div className="h-screen bg-background flex flex-col">
      <Head>
        <title>Check</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Check web application" />
      </Head>

      <Header headerType={headerType} />

      <main className="row-auto mt-[1px] flex flex-col justify-center items-center">
        { children }
      </main>
    </div>
  );
}

export default Layout;
