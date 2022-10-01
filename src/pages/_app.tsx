import "../scss/main.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";


function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.history.scrollRestoration = "manual";
        TagManager.initialize({gtmId: "G-CVX2T07BGE"})
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
