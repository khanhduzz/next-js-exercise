import Layout from "@/common/components/Layout";

// import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/vendor.css";
import "@/styles/base.css";
import "@/styles/micons.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
