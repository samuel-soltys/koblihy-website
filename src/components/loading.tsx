import { useEffect, useRef } from "react";

const Loading = () => {
    const donut = useRef<HTMLImageElement>(null);
    const loading = useRef<HTMLImageElement>(null);
    useEffect(() => {
        donut.current!.style.transform = "rotateZ(360deg)";
        setTimeout(() => {
            donut.current!.style.width = "600vw";
        }, 2200);
        setTimeout(() => {
            document.getElementsByTagName("html")[0].style.overflow = "visible";
			document.getElementsByTagName("body")[0].style.overflow = "visible";
			document.getElementById("__next")!.style.overflow = "visible";
            loading.current!.style.display = "none";
        }, 4200);
    }, []);

    return (
        <div className="loading" ref={loading}>
            <img ref={donut} src="donut.svg" alt="Donut" />
        </div>
    );
};

export default Loading;