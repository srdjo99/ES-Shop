import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>{/* navbar */}</nav>
      {/* sidebar */}

      <main
        style={{ margin: '80px auto', maxWidth: '1440px', padding: '0px 30px' }}
      >
        {children}
      </main>

      <footer>{/* custom footer */}</footer>
    </>
  );
};
