// import styles from "../styles/Skills.module.css";
import commonStyle from "../styles/Common.module.css";

function Skills() {
    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.title}>Skills</div>
            <div>
                <div>
                    <h3>BE</h3>
                    <ul>
                        <li>Spring Boot</li>
                        <li>JSP</li>
                    </ul>
                </div>
                <div>
                    <h3>FE</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Thymeleaf</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h3>DB</h3>
                    <ul>
                        <li>Oracle</li>
                    </ul>
                </div>
                <div>
                    <h3>Tool</h3>
                    <ul>
                        <li>STS</li>
                        <li>Eclipse</li>
                        <li>Visual Studio Code</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;