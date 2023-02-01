import '../assets/scss/global.scss';
import type { AppProps } from 'next/app';
import { AppKit } from 'manakit';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppKit>
      <Component {...pageProps} />
    </AppKit>
  );
}

export default appWithTranslation(App);
