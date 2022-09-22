import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useWindowDimensions from "../useWindowDimenstions";

const Header = () => {
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            if (
                position > moving ||
                position < 10 ||
                window.innerWidth <= 1024
            ) {
                setVisible(true);
            } else {
                setVisible(false);
            }
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const cls = visible ? "visible" : "hidden";
    if(typeof window !== "undefined") {
        const { height, width } = useWindowDimensions();
        useEffect(() => {
            setTimeout(() => {
                setVisible(true);
                const mobileoverlay = document.getElementsByClassName("mobile-overlay")[0] as HTMLDivElement;
                if (width < 1024) {
                    mobileoverlay.style.display = "grid";
                } else {
                    mobileoverlay.style.display = "none";
                }
            }, 4300);
        }, [])
    }

    const HeaderLink = ({ id, label }: { id: string; label: string }) => {
        return (
            <Link
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setMenu(false)}
            >
                <p>{label}</p>
            </Link>
        );
    };

    const [menu, setMenu] = useState(false);

    // Turn off scroll for mobile menu
    useEffect(() => {
        const html = document.querySelector("html");
        if (menu) {
            if (html) html.style.overflowY = "hidden";
        } else {
            if (html) html.style.overflowY = "scroll";
        }
    }, [menu]);

    return (
        <div className={"header " + cls}>
            <img src="logo.svg" className="logo" />
            <div className="links">
                <HeaderLink id="team" label="Team" />
                <HeaderLink id="games" label="Games" />
                <HeaderLink id="competitions" label="Competition" />
                <HeaderLink id="contact" label="Contact" />
            </div>
            <div className="mobile-menu">
                <div
                    className="burger-wrapper"
                    id="burger"
                    onClick={() => setMenu(!menu)}
                >
                    <div className={menu ? "toggle" : ""} id="bar1"></div>
                    <div className={menu ? "toggle" : ""} id="bar2"></div>
                    <div className={menu ? "toggle" : ""} id="bar3"></div>
                </div>
            </div>
            <div className={menu ? "mobile-overlay toggle" : "mobile-overlay"}>
                <HeaderLink id="team" label="Team" />
                <HeaderLink id="games" label="Games" />
                <HeaderLink id="competitions" label="Competition" />
                <HeaderLink id="contact" label="Contact" />
            </div>
        </div>
    );
};

export default Header;
