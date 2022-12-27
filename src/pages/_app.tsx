import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import color from "src/utils/functions/color";
import GlobalStyle from "src/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trackit - Te ajudando a criar hábitos saudáveis!</title>
        <meta name="description" content="Aplicativo para criar e gerenciar hábitos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={{ color }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
