import type { GetStaticProps, NextPage } from 'next';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
import Layout from '../container/layout';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return <Layout home>{t('title')}</Layout>;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu'])),
    },
  };
};
