import { useState, useEffect } from "react";

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
    
    return (
        <div className={"header " + cls}>
            <img src="logo.svg" className="logo" />
            <div className="links">
                <p>Team</p>
                <p>Games</p>
                <p>Competition</p>
                <p>Contact</p>
            </div>
        </div>
    );
};

export default Header;