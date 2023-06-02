// import styles from "../styles/Skills.module.css";
import commonStyle from "../styles/Common.module.css";
import SkillLogo from "./SkillLogo";

function Skills() {
    return (
        <div className={commonStyle.content_box}>
            <div>Languages and Skills</div>
            <div className={commonStyle.title}>Things I've learned and used</div>
            <div style={{ lineHeight:"1.5" }}>지금까지 배우고 사용해 보았던 스킬들을 모은 것입니다.<br/>
                자바 웹 개발자 과정을 통해 Spring Boot로 페이지를 만들 수 있는 실력까지 키웠으며<br/>
                현재는 프론트엔드의 수준을 높이고자 React를 공부하고 있습니다.</div>
            <div>
                <div>
                    <h2>Back End</h2>
                    <SkillLogo src="image/logo/spring.png" alt="Spring" />
                </div>
                <div>
                    <h2>Front End</h2>
                    <SkillLogo src="image/logo/css02.png" alt="CSS" />
                    <SkillLogo src="image/logo/html.png" alt="HTML" />
                    <SkillLogo src="image/logo/JS.png" alt="Javascript" />
                    <SkillLogo src="image/logo/thymeleaf01.png" alt="Thymeleaf" />
                    <SkillLogo src="image/logo/bootstrap.png" alt="Bootstrap" />
                    <SkillLogo src="image/logo/react.png" alt="React" />
                </div>
                <div>
                    <h2>DataBase</h2>
                    <SkillLogo src="image/logo/oracle.png" alt="Oracle" />
                </div>
                <div>
                    <h2>Tool</h2>
                    <SkillLogo src="image/logo/eclipse01.png" alt="Eclipse" />
                    <SkillLogo src="image/logo/vscode.png" alt="VSCode" />
                    <SkillLogo src="image/logo/github.png" alt="Github" />
                </div>
            </div>
        </div>
    );
}

export default Skills;