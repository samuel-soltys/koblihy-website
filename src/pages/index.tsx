import type { NextPage } from "next";
import Loading from "../components/loading";
import Header from "../components/header";
import "@fontsource/quicksand";
import Member from "../components/member";
import InfoBlock from "../components/infoblock";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    content="text/html; charset=utf-8"
                    http-equiv="Content-Type"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes"
                />

                {/* Basic meta info  */}
                <meta name="author" content="Koblihy" />
                <meta
                    name="description"
                    content="We are a team of 5 high-school students passionate about game development. We also participated multiple times in the Špongia game dev competition."
                />

                {/* OpenGraph meta  */}
                <meta property="og:description" content="We are a team of 5 high-school students passionate about game development." />
                <meta property="og:title" content="Koblihy - game developers" />
                <meta property="og:image" content="og-image.jpg" />
                <meta property="og:url" content="https://koblihy.sk" />

                {/* Favicon */}
                <link rel="shortcut icon" type="image/png" href="logo.png" />
                <link rel="shortcut icon" href="favicons/favicon.ico" />
                <link rel="icon" sizes="16x16 32x32 64x64" href="favicons/favicon.ico" />
                <link rel="icon" type="image/png" sizes="196x196" href="favicons/favicon-192.png" />
                <link rel="icon" type="image/png" sizes="160x160" href="favicons/favicon-160.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96.png" />
                <link rel="icon" type="image/png" sizes="64x64" href="favicons/favicon-64.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16.png" />
                <link rel="apple-touch-icon" href="favicons/favicon-57.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="favicons/favicon-114.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="favicons/favicon-72.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="favicons/favicon-144.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="favicons/favicon-60.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="favicons/favicon-120.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="favicons/favicon-76.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="favicons/favicon-152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicons/favicon-180.png"/>
                <meta name="msapplication-TileColor" content="#FFFFFF"/>
                <meta name="msapplication-TileImage" content="favicons/favicon-144.png"/>
                <meta name="msapplication-config" content="favicons/browserconfig.xml"/>

                <title>Koblihy&nbsp;-&nbsp;game developers</title>
            </Head>
            <Loading />
            <div className="content">
                <Header />
                <section className="hero">
                    <div className="text">
                        <h1>We make games.</h1>
                        <p>
                            We are a team of 5 high-school students passionate
                            about game development. We also participated
                            multiple times in the Špongia game dev competition.
                        </p>
                    </div>
                    <div className="illustration">
                        <img src="donut-bg.svg" alt="Donut Illustration" />
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
                            photo="theo_sirota.jpg"
                            role="Game developer"
                            instagram="https://www.instagram.com/theo_sirota"
                        />
                        <Member
                            name="Dominika Trudičová"
                            photo="dominika_trudicova.jpg"
                            role="Sound designer, graphic designer"
                            instagram="https://www.instagram.com/slady46/"
                        />
                        <img
                            className="illustration"
                            src="donut-bg.svg"
                            alt="Donut Illustration"
                        />
                        <Member
                            name="Silvia Katlovská"
                            photo="silvia_katlovska.jpg"
                            role="Graphic designer, sound designer"
                            instagram="https://www.instagram.com/sisa_kat/"
                        />
                        <Member
                            name="Oliver Grega"
                            photo="oliver_grega.jpg"
                            role="Game developer, graphic designer"
                        />
                    </div>
                </section>
                <div className="background">
                    <section className="games">
                        <h1>Games</h1>
                        <InfoBlock
                            headline="Bob's musical donut adventures"
                            text={
                                <p>
                                    A side-scrolling game with pretty parallax
                                    scrolling backgrounds and obstacles, which
                                    are synchronized to music and rhythm. Listen
                                    carefully to finish the 3 levels.
                                </p>
                            }
                            button={
                                <a
                                    href="https://drive.google.com/drive/u/0/folders/1wbkm36IIZ5Osd9qkIYSDuHy-YBZM7PM3"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="button"
                                >
                                    <span>Download game</span>
                                    <img
                                        src="/icons/windows.svg"
                                        alt="Windows logo"
                                    />
                                </a>
                            }
                            img="/bob-musical-adventures-screen.jpg"
                        />
                    </section>
                    <section className="competitions">
                        <h1>Competitions</h1>
                        <InfoBlock
                            headline="Spongia 2O21"
                            text={
                                <p>
                                    <a
                                        href="https://www.smnd.sk/mikey/PHP/spongia/spongia_2021/index.php"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        A game development competition
                                    </a>
                                    , held in our school in Bratislava (School
                                    for Exceptionally Gifted Children). We won
                                    3rd place in the year 2021. We are also
                                    attending this year&apos;s Spongia
                                    competition, so stay tuned for a new game!
                                </p>
                            }
                            img="/spongia-2021.jpg"
                        />
                    </section>
                </div>
                <section className="contact">
                    <h1>Contact</h1>
                    <p>You can contact us by email:</p>
                    <a href="mailto:contact@koblihy.sk">contact@koblihy.sk</a>

                    <p>Also check out our social medias:</p>
                    <div className="socials">
                        <a
                            href="https://www.instagram.com/koblihy.sk/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/icons/instagram.svg"
                                alt="Koblihy Instagram"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/koblihy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/icons/linkedin.svg"
                                alt="Koblihy LinkedIn"
                            />
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
