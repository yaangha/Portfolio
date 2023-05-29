import SidebarItem from "./SidebarItem";

function Sidebar() {
    return (
        <div>
            <SidebarItem item="About Me"/>
            <SidebarItem item="Skill"/>
            <SidebarItem item="Projects"/>
            <SidebarItem item="Contact Me"/>
        </div>
    );
}

export default Sidebar;