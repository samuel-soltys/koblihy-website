import type { NextPage } from "next";
import Loading from "../components/loading";
import Header from "../components/header";
import "@fontsource/comic-neue";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
    const hero = useRef<HTMLDivElement>(null);
    
	useEffect(() => {
        setTimeout(() => {
            hero.current!.style.display = "block";
        }, 5000);
    });

    return (
        <>
            <Loading />
            <div className="content" >
                <Header />
                <div className="hero" ref={hero}>
                    <h1>We make games.</h1>
                </div>
            </div>
        </>
    );
};

export default Home;
