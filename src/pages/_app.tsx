import "../assets/scss/global.scss";
import type { AppProps } from "next/app";

import { App as AppKit } from "manakit";
import ManaKitPreset from "../plugins/manakit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppKit set={ManaKitPreset}>
      <Component {...pageProps} />
    </AppKit>
  );
}
