import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.scss";
import "../styles/styles.css";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function App({ Component, pageProps }) {
  useEffect(() => { AOS.init() }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
