import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import GlobalStyles from "./../components/GlobalStyles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
