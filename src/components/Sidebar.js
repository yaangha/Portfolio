import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarItem item="About Me"/>
            <SidebarItem item="Skill"/>
            <SidebarItem item="Projects"/>
            <SidebarItem item="Contact Me"/>
        </div>
    );
}

export default Sidebar;