import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GoToTheTop from "../components/GoToTheTop";
import { useRef } from "react";

function Home() {
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();

    const handleScroll = (el) => {
        window.scrollTo({ top: el.current.offsetTop, behavior: "smooth" });
    };
    return (
        <div style={{ backgroundColor:"rgb(245, 245, 245)" }}>
            <div className={styles.main_box}>
                <div className={styles.navBtn}>
                    <div>
                        <button onClick={() => handleScroll(section1)}>Biography</button>
                        <button onClick={() => handleScroll(section2)}>Skills</button>
                        <button onClick={() => handleScroll(section3)}>Projects</button>
                        <button onClick={() => handleScroll(section4)}>Contact</button>
                    </div>
                </div>
                <div className={styles.content_box}>
                    <div className={styles.title}>HAEUN<br/>PORTFOLIO</div>
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