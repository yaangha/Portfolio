import itemStyle from "../styles/ProjectItem.module.css";

function ProjectItem({ title, info, url, skills, img }) {
    return (
        <div className={itemStyle.testImgDiv}>
            <img src={img} alt={title}/> 
            {/*
            <div className={itemStyle.imgDiv}>
                <img className={itemStyle.images} src={img} alt={title}/>
            </div>
            <div className={itemStyle.content_box}>
                <div className={itemStyle.title}>{title}</div>
                <div>{info}</div>
                <ul className={itemStyle.skill_list}>
                    {skills.map((i) => <li>{i}</li>)}
                </ul>
                <button className={itemStyle.btn} onClick={() => { window.open(url) }}>Read More..</button>
            </div>
            */}
        </div>
    );
}

export default ProjectItem;