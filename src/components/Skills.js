// import styles from "../styles/Skills.module.css";
import commonStyle from "../styles/Common.module.css";
import SkillLogo from "./SkillLogo";

function Skills() {
    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.title}>Skills</div>
            <div>
                <div>
                    <h3>BE</h3>
                    <SkillLogo src="image/spring.png" alt="Spring" />
                </div>
                <div>
                    <h3>FE</h3>
                    <SkillLogo src="image/css02.png" alt="CSS" />
                    <SkillLogo src="image/html.png" alt="HTML" />
                    <SkillLogo src="image/JS.png" alt="Javascript" />
                    <SkillLogo src="image/thymeleaf01.png" alt="Thymeleaf" />
                    <SkillLogo src="image/bootstrap.png" alt="Bootstrap" />
                    <SkillLogo src="image/react.png" alt="React" />
                </div>
                <div>
                    <h3>DB</h3>
                    <SkillLogo src="image/oracle.png" alt="Oracle" />
                </div>
                <div>
                    <h3>Tool</h3>
                    <SkillLogo src="image/eclipse01.png" alt="Eclipse" />
                    <SkillLogo src="image/vscode.png" alt="Visual Studio Code" />
                    <SkillLogo src="image/github.png" alt="Github" />
                </div>
            </div>
        </div>
    );
}

export default Skills;