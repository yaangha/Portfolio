import itemStyle from "../styles/ProjectItem.module.css";

function ProjectItem({ title, info, url, skills }) {
    return (
        <div className={itemStyle.item_box}>
            <div className={itemStyle.title}>{title}</div>
            <div>{info}</div>
            <ul className={itemStyle.skill_list}>
                {skills.map((i) => <li>{i}</li>)}
            </ul>
            <button className={itemStyle.btn} onClick={() => { window.open(url) }}>Read More..</button>
        </div>
    );
}

export default ProjectItem;