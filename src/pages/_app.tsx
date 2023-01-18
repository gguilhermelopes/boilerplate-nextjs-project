import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="./img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="./img/icon-512.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
