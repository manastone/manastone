import { Container, Sheet } from 'manakit';
import { GetStaticProps } from 'next';
// Translate
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Container>
      <div className="mt-5">{t('title')}</div>
      <Sheet height={320} width={320} color={'primary'} elevation={10}>
        Bonjour ceci est une sheet
      </Sheet>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
