import Layout from "@/common/components/Layout";

import "@/styles/main.css";
import "@/styles/vendor.css";
import "@/styles/base.css";
import "@/styles/micons.css";


import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="js/jquery-2.1.3.min.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="/js/main.js"></Script>
    </>
  );
}
