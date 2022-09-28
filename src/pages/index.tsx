import type { NextPage } from "next";
import Loading from "../components/loading";
import Header from "../components/header";
import "@fontsource/quicksand";
import { useEffect, useRef } from "react";
import Member from "../components/member";
import InfoBlock from "../components/infoblock";

const Home: NextPage = () => {
    return (
        <>
            <Loading />
            <div className="content">
                <Header />
                <section className="hero">
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
                            instagram="https://www.instagram.com/samuel_soltys/"
                            linkedin="https://www.linkedin.com/in/samuel-soltys/"
                            github="https://github.com/samuel-soltys"
                            web="https://samuelsoltys.com"
                        />
                        <Member
                            name="Theo Sirota"
                            photo="placeholder.svg"
                            role="Game developer"
                            instagram=""
                            linkedin=""
                            github=""
                        />
                        <Member
                            name="Dominika Trudičová"
                            photo="placeholder.svg"
                            role="Idea maker, sound designer, graphic designer"
                            instagram="https://www.instagram.com/slady46/"
                        />
                        <img className="illustration" src="donut-bg.svg" />
                        <Member
                            name="Silvia Katlovská"
                            photo="placeholder.svg"
                            role="Sound designer, graphic designer"
                            instagram=""
                        />
                        <Member
                            name="Oliver Grega"
                            photo="placeholder.svg"
                            role="Game developer, graphic designer"
                            instagram=""
                            github=""
                            web=""
                        />
                    </div>
                </section>
                <div className="background">
                    <section className="games">
                        <h1>Games</h1>
                        <InfoBlock
                            headline="Bob musical adventures"
                            text="A side-scrolling game with pretty parallax scrolling backgrounds and obstacles which are synchronized to music and rhythm. Listen carefully to finish the 3 levels."
                            button={
                                <a
                                    href="https://drive.google.com/drive/u/0/folders/1wbkm36IIZ5Osd9qkIYSDuHy-YBZM7PM3"
                                    target="_blank"
                                >
                                    <span>Download game</span>
                                    <img src="/icons/windows.svg" />
                                </a>
                            }
                            img="/bob-musical-adventures-screen.png"
                        />
                    </section>
                    <section className="competitions">
                        <h1>Competitions</h1>
                        <InfoBlock
                            headline="Spongia 2O21"
                            text="A game development competition, held in our school in Bratislava (School for Exceptionally Gifted Children). We won 3rd place in the year 2020. We are also attending this year's Spongia competition. Stay tuned for a new game!"
                        />
                    </section>
                </div>
                <section className="contact">
                    <h1>Contact</h1>
                    <p>You can contact us by email:</p>
                    <p>contact@donuts.dev</p>
                    <p>Also check out our social medias</p>
                    <div className="socials">
                        <a href="https://www.instagram.com/koblihy.sk/" target="_blank">
                            <img src="/icons/instagram.svg" />
                        </a>
                        <a href="https://www.linkedin.com/company/koblihy" target="_blank">
                            <img src="/icons/linkedin.svg" />
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
