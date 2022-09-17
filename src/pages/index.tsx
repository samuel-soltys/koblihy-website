import type { NextPage } from "next";
import Loading from "../components/loading";
import Header from "../components/header";
import "@fontsource/comic-neue";
import { useEffect, useRef } from "react";
import Member from "../components/member";
import InfoBlock from "../components/infoblock";

const Home: NextPage = () => {
    const hero = useRef<HTMLDivElement>(null);

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
                        <br />
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
                            name="Oliver Grega"
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
                <div className="background">
                    <section className="games">
                        <h1>Games</h1>
                        <InfoBlock
                            headline="Bob musical adventures"
                            text="A side-scrolling game with pretty parallax scrolling backgrounds and obstacles which are synchronized to music and rhythm. Listen carefully to finish the 3 levels."
                        />
                        <InfoBlock
                            headline="New game donut"
                            text="This new game is coming soon as a game for competition Spongia 2022. STAY TUNED COMING SOON"
                        />
                    </section>
                    <section className="competitions">
                        <h1>Competitions</h1>
                        <InfoBlock
                            headline="Špongia 2O21"
                            text="A game development competition held in our school. We won 3rd place in the year 2020. We are also attending this years Spongia competition."
                        />
                    </section>
                </div>
                <section className="contact">
                    <h1>Contact</h1>
                    <p>contact@donuts.dev Socials: Instagram LinkedIn</p>
                </section>
            </div>
        </>
    );
};

export default Home;
