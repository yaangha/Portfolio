// import styles from "../styles/AboutMe.module.css";
import commonStyle from "../styles/Common.module.css";

function AboutMe() {
    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.title}>About Me</div>
            <div style={{ textAlign:"center", fontSize:"72px", fontFamily:"cursive", fontWeight:"bold" }}>About Me</div>
        </div>
    );
}

export default AboutMe;