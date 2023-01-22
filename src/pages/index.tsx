import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
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
      <main>Manastone</main>
    </>
  );
}
