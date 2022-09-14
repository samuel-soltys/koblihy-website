import type { NextPage } from "next";
import Loading from "../components/loading";
import Header from "../components/header";
import "@fontsource/comic-neue";
import { useEffect, useRef } from "react";
import Member from "../components/member"

const Home: NextPage = () => {
    const hero = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            hero.current!.style.display = "flex";
        }, 5000);
    });

    return (
        <>
            <Loading />
            <div className="content">
                <Header />
                <section className="hero" ref={hero}>
                    <div className="text">
                        <h1>We make games.</h1>
                        <p>
                            We are team of 5 high-school students passionate
                            about game development. We also participated
                            multiple times in the Špongia game dev competition.
                        </p>
                    </div>
                    <div className="illustration">
                        <img src="donut-bg.svg" />
                    </div>
                </section>
                <section className="team">
					<h1>Our team</h1>
					<div className="members">
						<Member
							name="Samuel Šoltys"
							photo="samuel_soltys.jpg"
							role="Game and web developer, graphic designer"
							linkedin=""
							github=""
							web=""
							instagram=""
						/>
						<Member
							name="Theo Sirota"
							photo="placeholder.svg"
							role="Game developer"
							linkedin=""
							github=""
							web=""
							instagram=""
						/>
						<Member
							name="Dominika Trudičová"
							photo="placeholder.svg"
							role="Idea maker, sound designer, graphic designer"
							linkedin=""
							github=""
							web=""
							instagram=""
						/>
						<br/>
						<Member
							name="Silvia Katlovská"
							photo="placeholder.svg"
							role="Sound designer, graphic designer"
							linkedin=""
							github=""
							web=""
							instagram=""
						/>
						<Member
							name="Olvier Grega"
							photo="placeholder.svg"
							role="Game developer, graphic designer"
							linkedin=""
							github=""
							web=""
							instagram=""
						/>
					</div>
					<img className="illustration" src="donut-bg.svg" />
                </section>
            </div>
        </>
    );
};

export default Home;
