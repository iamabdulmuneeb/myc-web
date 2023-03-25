import Header from '@/components/Header/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Make Your Own Closet (MYOC)</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <Header />
      </header>
      <main>{/* main content section */}</main>
      <footer>{/* footer component */}</footer>
    </>
  );
}
