import bioStyles from "../styles/AboutMe.module.css";
import commonStyle from "../styles/Common.module.css";
import Certificate from "./Certificate";

function AboutMe() {
    const certificateData = [
        {pass:"필기합격", date:"2023.06.14", name:"정보처리기사"},
        {pass:"필기합격", date:"2022.08.28", name:"웹디자인기능사"},
        {pass:"최종합격", date:"2022.06.03", name:"컴퓨터활용능력 1급"},
        {pass:"최종합격", date:"2020.01.19", name:"JLPT N3"},
        {pass:"최종합격", date:"2019.06.28", name:"컴퓨터그래픽스운용기능사"},
        {pass:"최종합격", date:"2019.04.12", name:"GTQ 포토샵 1급"},
        {pass:"최종합격", date:"2019.03.15", name:"GTQ 일러스트 1급"}
    ];

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
                <h3>Certificate</h3>
                <ul className={bioStyles.certificate_list}>
                    {certificateData.map((i) => <Certificate pass={i.pass} date={i.date} name={i.name}/>)}
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;