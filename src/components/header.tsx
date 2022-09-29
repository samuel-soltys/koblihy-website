import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(false);
    const [menu, setMenu] = useState(false);
    const [loadingFinished, setloadingFinished] = useState(false);
    const cls = visible ? "visible" : "hidden";
    const mobileoverlay = useRef<HTMLDivElement>(null);

    // Setting visibility after loading but 100ms before finishing loading animation
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
            setloadingFinished(true);
            setMobileHeader();
        }, 4200);
    }, []);

    useEffect(() => {
        if (loadingFinished) {
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

            // Adding scroll listener
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    });

    // Hiding menu when resizing and after loading
    const setMobileHeader = () => {
        if (window.innerWidth < 1024) {
            // mobileoverlay.current!.style.display = "grid";
            mobileoverlay.current!.style.top = `${
                (window.innerWidth < 768 ? 80 : 100) -
                window.innerHeight
            }px`;
        } else {
            mobileoverlay.current!.style.top = "-100vh"
        }
    };
    useEffect(() => {
        if (loadingFinished) {
            // Adding resize listener
            window.addEventListener("resize", setMobileHeader);
            return () => {
                window.removeEventListener("resize", setMobileHeader);
            };
        }
    });
    // Turn off scroll for mobile menu
    useEffect(() => {
        if (loadingFinished) {
            const html = document.querySelector("html");
            if (menu) {
                if (html) html.style.overflowY = "hidden";
                mobileoverlay.current!.style.top = "0px";
            } else {
                if (html) html.style.overflowY = "scroll";
                mobileoverlay.current!.style.top = `${
                    (window.innerWidth < 768 ? 80 : 100) - window.innerHeight
                }px`;
            }
        }
    }, [menu]);

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

    return (
        <div className={"header " + cls}>
            <img src="logo.svg" className="logo" alt="Koblihy logo" />
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
            <div className={menu ? "mobile-overlay toggle" : "mobile-overlay"} ref={mobileoverlay}>
                <HeaderLink id="team" label="Team" />
                <HeaderLink id="games" label="Games" />
                <HeaderLink id="competitions" label="Competition" />
                <HeaderLink id="contact" label="Contact" />
            </div>
        </div>
    );
};

export default Header;
