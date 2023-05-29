import styles from "../styles/Sidebar.module.css";

function SidebarItem({ item }) {
    return (
        <li className={styles.sidebar_item}>{ item }</li>
    );
}

export default SidebarItem;