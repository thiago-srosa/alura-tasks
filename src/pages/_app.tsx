import type { AppProps } from "next/app";

import "../styles/reset.css";
import "../styles/appStyle.scss";

import { store } from "src/redux/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
