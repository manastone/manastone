import '../assets/scss/global.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
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
        <meta
          name="description"
          content="Créateur de ManaKit, Manastone est une communautée de développeur et d'acteur du web français."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />

        <meta name="author" content="Laurent Grimaldi" />
        <meta name="copyright" content="©Manastone | 2021 - 2023" />
        <meta name="generator" content="ManaKit & Next.js"></meta>
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

export default appWithTranslation(App);
