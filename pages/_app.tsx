import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Head>
        <title>Ayobami paul</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dmixz7eur/image/upload/v1673583454/my%20portfolio/logo_wzrddg.png"
        />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
