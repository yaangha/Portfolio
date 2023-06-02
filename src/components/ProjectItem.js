import itemStyle from "../styles/ProjectItem.module.css";

function ProjectItem({ title, info, url, skills, img, per }) {
    return (
        <div className={itemStyle.div_box}>
            <div style={{ textAlign:"right", paddingBottom:"70px" }}>
                <img src={img} alt={title}/>
            </div>
            <div className={itemStyle.content_box}>
                <div className={itemStyle.per}>{per}</div>
                <div className={itemStyle.title}>{title}</div>
                <div>{info}</div>
                <ul className={itemStyle.skill_list}>
                    {skills.map((i) => <li>{i}</li>)}
                </ul>
                <div className={itemStyle.url} onClick={() => { window.open(url) }}>{url}</div>
                <button className={itemStyle.btn} onClick={() => { window.open(url) }}>Read More..</button>
            </div>
        </div>
    );
}

export default ProjectItem;