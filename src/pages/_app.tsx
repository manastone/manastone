import '../assets/scss/global.scss';
import type { AppProps } from 'next/app';
// import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Manastone</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
