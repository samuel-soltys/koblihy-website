import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
    const donut = useRef<HTMLImageElement>(null);
    
	useEffect(() => {
        setTimeout(() => {
            donut.current!.style.width = "600vw";
            donut.current!.style.transform = "rotateZ(360deg)";
        }, 2000);
    }, []);

    return (
        <div className="loading">
            <img ref={donut} src="donut.svg" alt="Donut" />
        </div>
    );
};

export default Home;
