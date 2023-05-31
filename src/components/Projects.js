// import styles from "../styles/Projects.module.css";
import commonStyle from "../styles/Common.module.css";
import ProjectItem from "./ProjectItem";

function Projects() {
    const items = [
        { title: "영화, 기록하다", 
            info: "영화 리뷰를 작성한 후 댓글로 사용자들끼리 소통할 수 있는 사이트",
            url: "https://github.com/yaangha/Film-Life",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/3rd.png" },
        { title: "Booque ver2", 
            info: "시즌1 버전에 중고 판매와 판매&구매자간의 채팅 기능을 추가하였습니다.",
            url: "https://github.com/yaangha/Booque-ver2",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/2nd.jpeg" },
        { title: "Booque ver1", 
            info: "책 판매 사이트와 블로그를 결합하여, 구매 및 리뷰 작성을 할 수 있는 사이트입니다.",
            url: "https://github.com/yaangha/Booque",
            skills: ["Java", "Spring Boot", "Thymeleaf", "Oracle", "Html", "Css", "Javascript"],
            img: "image/1st.png" }
    ];

    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.title}>Projects</div>
            <div style={{ textAlign:"right", fontSize:"72px", fontFamily:"cursive", fontWeight:"bold" }}>Projects</div>
            {items.map((items) => 
                <ProjectItem 
                    title={items.title} 
                    info={items.info}
                    url={items.url}
                    skills={items.skills}
                    img={items.img}/>
            )}
        </div>
    );
}

export default Projects;