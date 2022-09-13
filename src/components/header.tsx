import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            if (position > moving || position < 10) {
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
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 4300);
    }, []);
    

    const HeaderLink = ({ id, label }: { id: string; label: string }) => {
        return (
            <Link
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
            >
                <p>{label}</p>
            </Link>
        );
    };

    return (
        <div className={"header " + cls}>
            <img src="logo.svg" className="logo" />
            <div className="links">
                <HeaderLink id="team" label="Team" />
                <HeaderLink id="games" label="Games" />
                <HeaderLink id="competition" label="Competition" />
                <HeaderLink id="contact" label="Contact" />
            </div>
        </div>
    );
};

export default Header;
