import itemStyle from "../styles/ProjectItem.module.css";

function ProjectItem({ title, info, url, skills, img, per }) {
    return (
        <div className={itemStyle.grid}>
            <div style={{ textAlign:"right", paddingBottom:"70px" }}>
                <img className={itemStyle.img} src={process.env.PUBLIC_URL + '/' + img} alt={title}/>
            </div>
            <div className={itemStyle.content_box}>
                <div className={itemStyle.per}>{per}</div>
                <div className={itemStyle.title}>{title}</div>
                <div className={itemStyle.info}>{info}</div>
                <ul className={itemStyle.skill_list}>
                    {skills.map((i, index) => <li key={index}>{i}</li>)}
                </ul>
                <div className={itemStyle.url} onClick={() => { window.open(url) }}>{url}</div>
                <button className={itemStyle.btn} onClick={() => { window.open(url) }}>Read More..</button>
            </div>
        </div>
    );
}

export default ProjectItem;