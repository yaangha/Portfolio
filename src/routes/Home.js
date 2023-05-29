import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GoToTheTop from "../components/GoToTheTop";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div className={styles.main_box}>
            <Sidebar></Sidebar>
            <div className={styles.content_box}>
                <div className={styles.title}>HAEUN PORTFOLIO</div>
                <div>
                    <div>SHOW</div>
                    <img className={styles.picture} src="image/me.jpg" alt="me"/>
                </div>
            </div>
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <GoToTheTop />
        </div>
    );
}

export default Home;