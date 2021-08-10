import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import GlobalStyles from "./../components/GlobalStyles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
