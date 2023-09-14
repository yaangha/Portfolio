import projectStyle from "../styles/Projects.module.css";
import commonStyle from "../styles/Common.module.css";
import ProjectItem from "./ProjectItem";

function Projects() {
    const items = [
        { title: "The Summer", 
            info: "Spring Boot로 개발한 영화 기록 서비스로 배포까지 완료됨(버전 업데이트 중)",
            url: "https://github.com/yaangha/Movie-Community",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Html", "Css", "Javascript"],
            img: "image/project/TheSummer.png",
            per: "Personal Project" },
        { title: "영화, 기록하다", 
            info: "영화 리뷰를 작성한 후 댓글로 사용자들끼리 소통할 수 있는 사이트",
            url: "https://github.com/yaangha/Film-Life",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/project/3rd.png",
            per: "Personal Project" },
        { title: "Booque ver2", 
            info: "시즌1에 중고 판매와 채팅 기능이 추가된 버전",
            url: "https://github.com/yaangha/Booque-ver2",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/project/2nd.jpeg",
            per: "Team Project" },
        { title: "Booque ver1", 
            info: "책 판매 사이트와 블로그 기능을 결합한 웹 사이트",
            url: "https://github.com/yaangha/Booque",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/project/1st.png",
            per: "Team Project" },
        { title: "Movie Diary", 
            info: "자바 스윙으로 개발한 영화를 기록할 수 있는 프로그램",
            url: "https://github.com/yaangha/Movie-Diary",
            skills: ["Java(swing)"],
            img: "image/project/swing.png",
            per: "Personal Project" }
    ];

    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.subTitle}>Projects</div>
            <div className={commonStyle.title}>The things I worked on</div>
            <div>지금까지 공부한 것들을 활용한 프로젝트 리스트입니다.</div>
            <div className={projectStyle.container}>
                {items.map((items, index) => 
                    <ProjectItem 
                        key={index}
                        title={items.title} 
                        info={items.info}
                        url={items.url}
                        skills={items.skills}
                        img={items.img}
                        per={items.per}/>
                )}
            </div>
        </div>
    );
}

export default Projects;