import navStyle from "../styles/NavBar.module.css";
import { useEffect, useState } from "react";

function NavBar() {
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScrollNavBar() {
        const {scrollY} = window;
        scrollY > 950 ? setScrollActive(true) : setScrollActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollNavBar);
        return () => {
            window.removeEventListener("scroll", handleScrollNavBar);
        }
    }, []);

    return (
        <div style={{backgroundColor:"yellow"}}>
            {ScrollActive ? <div className={navStyle.navBar}>Navigation Bar Test @!!</div> : "nonshow!!!"}
        </div>
    );
}

export default NavBar;