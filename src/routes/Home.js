import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import styles from "../components/Home.module.css";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className={styles.main_box}>
            <h2>HAEUN PORTFOLIO</h2>
            <div style={{ backgroundColor:"green", height:"800px" }}>
                <div className={styles.content_box}>
                    <p>안녕하세요, 가나다라마사바 ㅇ아자아아 개발자입니다. 어떤어떠너더너어어 개발자가 되고 싶습니다. 안녕하세요, 가나다라마사바 ㅇ아자아아 개발자입니다. 어떤어떠너더너어어 개발자가 되고 싶습니다. 안녕하세요, 가나다라마사바 ㅇ아자아아 개발자입니다. 어떤어떠너더너어어 개발자가 되고 싶습니다. </p>
                </div>
                <img className={styles.picture} src="image/me.jpg" alt="me"/>
            </div>
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default Home;