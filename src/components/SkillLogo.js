import styles from "../styles/SkillLogo.module.css";
import { useState } from "react";

function SkillLogo({ src, alt }) {
    const [isHovering, setIsHovering] = useState(false); // hover 초기값 false
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv}>
                <div className={styles.imgDiv}>
                    <img className={styles.logoImg}
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                        src={process.env.PUBLIC_URL + '/' + src} alt={alt}/>
                </div>
                { isHovering ? (
                    <div className={styles.hoverTrue}>
                        { alt }
                    </div>
                ) : null }
            </div>
        </div>
    );
}

export default SkillLogo;