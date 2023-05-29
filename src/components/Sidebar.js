import SidebarItem from "./SidebarItem";
import styles from "../styles/Sidebar.module.css";

function Sidebar() {
    const item = [{title:"About Me"}, {title:"Skill"}, {title:"Project"}, {title:"Contact Me"}];
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar_ul}>
                {item.map((i) => <SidebarItem item={i.title}/>)}
            </ul>   
        </div>
    );
}

export default Sidebar;