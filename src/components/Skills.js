// import styles from "../styles/Skills.module.css";
import commonStyle from "../styles/Common.module.css";
import SkillLogo from "./SkillLogo";

function Skills() {
    return (
        <div className={commonStyle.content_box}>
            <div>Languages and Skills</div>
            <div className={commonStyle.title}>What I Learned..</div>
            <div>지금까지 배우고 사용해 보았던 스킬들을 모은 것입니다.<br/>
                자바 웹 개발자 과정을 통해 Spring Boot로 페이지를 만들 수 있는 실력까지 키웠으며<br/>
                현재는 프론트엔드의 수준을 높이고자 React를 공부하고 있습니다.</div>
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