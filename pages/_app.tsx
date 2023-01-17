import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global styles={globalStyles} />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
