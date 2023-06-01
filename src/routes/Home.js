import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GoToTheTop from "../components/GoToTheTop";
import { useEffect, useRef, useState } from "react";
import navStyle from "../styles/NavBar.module.css";


function Home() {
    // navBar Btn
    const home = useRef();
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();

    const handleScroll = (el) => {
        window.scrollTo({ top: el.current.offsetTop, behavior: "smooth" });
    };

    // navBar Scroll fix
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScrollNavBar() {
        const {scrollY} = window;
        scrollY > 815 ? setScrollActive(true) : setScrollActive(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrollNavBar);
        return () => {
            window.removeEventListener("scroll", handleScrollNavBar);
        }
    }, []);

    return (
        <div style={{ backgroundColor:"rgb(245, 245, 245)" }}>
            <div ref={home} className={styles.main_box}>
                <div className={styles.content_box}>
                    <div className={styles.title}>HAEUN<br/>PORTFOLIO</div>
                </div>

                <div>
                    {ScrollActive ? (
                        <div>
                            <div className={navStyle.navBar}>
                                <div className={navStyle.navBtn}>
                                    <button onClick={() => handleScroll(home)}>Home</button>
                                    <button onClick={() => handleScroll(section1)}>Biography</button>
                                    <button onClick={() => handleScroll(section2)}>Skills</button>
                                    <button onClick={() => handleScroll(section3)}>Projects</button>
                                    <button onClick={() => handleScroll(section4)}>Contact</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={navStyle.navBtn}>
                                <button onClick={() => handleScroll(home)}>Home</button>
                                <button onClick={() => handleScroll(section1)}>Biography</button>
                                <button onClick={() => handleScroll(section2)}>Skills</button>
                                <button onClick={() => handleScroll(section3)}>Projects</button>
                                <button onClick={() => handleScroll(section4)}>Contact</button>
                            </div>
                        </div>
                    )}
                </div>

                <div ref={section1}>
                    <AboutMe />
                </div>
                <div ref={section2}>
                    <Skills />
                </div>
                <div ref={section3}>
                    <Projects />
                </div>
                <div ref={section4}>
                    <ContactMe />
                </div>
                <GoToTheTop />
            </div>
        </div>
    );
}

export default Home;