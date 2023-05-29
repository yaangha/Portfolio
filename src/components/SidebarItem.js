import styles from "./Sidebar.module.css";

function SidebarItem({ item }) {
    return (
        <div className={styles.sidebar_item}>
            <p>{ item }</p>
        </div>
    );
}

export default SidebarItem;