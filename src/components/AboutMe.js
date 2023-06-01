// import styles from "../styles/AboutMe.module.css";
import commonStyle from "../styles/Common.module.css";

function AboutMe() {
    return (
        <div className={commonStyle.content_box}> 
            <div className={commonStyle.title}>Biography</div>
            <div>
                <h3>Info</h3>
                <p>양하은 Yang HaEun(1995.03.20)</p>
                <h3>Address</h3>
                <p>서울특별시 송파구</p>
                <h3>Education</h3>
                <p>itwill 자바 웹 개발자 양성과정 134기</p>
                <h3>certificate</h3>
                <ul>
                    <li>웹디자인기능사(필기)</li>
                    <li>컴퓨터활용능력 1급</li>
                    <li>컴퓨터그래픽스운용기능사</li>
                    <li>JLPT N3</li>
                    <li>GTQ 포토샵 1급</li>
                    <li>GTQ 일러스트 1급</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;