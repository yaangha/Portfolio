// import styles from "../styles/Skills.module.css";
import commonStyle from "../styles/Common.module.css";
import SkillLogo from "./SkillLogo";
import skillStyle from "../styles/Skills.module.css";

function Skills() {
    return (
        <div className={commonStyle.content_box}>
            <div>Languages and Skills</div>
            <div className={commonStyle.title}>Things I've learned and used</div>
            <div style={{ lineHeight:"1.5" }}>웹 개발자 교육과정을 통해 Java의 실력을 키웠으며 꾸준히 개발 공부를 하고 있습니다.</div>
            <div>
                <div>
                    <div className={skillStyle.skillPart}>Back End</div><br/>
                    <SkillLogo src="image/logo/spring.png" alt="Spring" />
                </div>
                <div>
                    <div className={skillStyle.skillPart}>Front End</div><br/>
                    <SkillLogo src="image/logo/thymeleaf01.png" alt="Thymeleaf" />
                    <SkillLogo src="image/logo/css02.png" alt="CSS" />
                    <SkillLogo src="image/logo/html.png" alt="HTML" />
                    <SkillLogo src="image/logo/JS.png" alt="Javascript" />
                </div>
                <div>
                    <div className={skillStyle.skillPart}>DataBase</div><br/>
                    <SkillLogo src="image/logo/oracle.png" alt="Oracle" />
                </div>
                <div>
                    <div className={skillStyle.skillPart}>Tool</div><br/>
                    <SkillLogo src="image/logo/github.png" alt="Github" />
                </div>
            </div>
        </div>
    );
}

export default Skills;