import "../scss/main.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    // const { pathname } = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         window.scrollTo(0, 0);
    //     }, 20);
    // }, [pathname]);
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
