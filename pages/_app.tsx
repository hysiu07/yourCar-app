import "@/styles/globals.scss";
// import "@/styles/components-styles/searchPanel"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
