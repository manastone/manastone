import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { MessageBar } from '../components/MessageBar';
import { Footer, Main } from 'manakit';
import { footerCategorySiteMapData, footerSiteMapData } from '../assets/data/footer';
import { useTranslation } from 'next-i18next';

export const siteTitle = 'Manastone';

function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  const { t } = useTranslation(['menu']);

  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
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

      <MessageBar />

      <Main>
        {home ? <p>Homepage</p> : ''}
        {children}
      </Main>

      <Footer app>
        {footerCategorySiteMapData.map((parent) => {
          return (
            <ul key={parent.category}>
              <span>{t(parent.name)}</span>
              {footerSiteMapData.map((item) => {
                if (item?.category === parent.category)
                  return (
                    <li key={parent.category + '-' + item.name}>
                      {item.type === 'route' ? (
                        <Link href={item.path}>{t(item.name)}</Link>
                      ) : (
                        <a href={item.path} target="_blank" rel="noreferrer">
                          {t(item.name)}
                        </a>
                      )}
                    </li>
                  );
              })}
            </ul>
          );
        })}
      </Footer>
    </Fragment>
  );
}

export default Layout;
