import '../assets/scss/global.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import BannerWebsite from '../components/BannerWebsite';

import { AppKit, BottomNavigation, Btn, Icon, Main, NavigationDrawer } from 'manakit';
import { mdiHome } from '@mdi/js';
import BottomNav from '../components/BottomNav';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppKit>
      <Head>
        <title>Manastone</title>
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
        <BannerWebsite />
        {/* <Nav /> */}

        <MenuBar />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <BottomNav />
      </div>
    </AppKit>
  );
}

export default appWithTranslation(App);
