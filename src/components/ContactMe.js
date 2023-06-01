import styles from "../styles/ContactMe.module.css";
import commonStyle from "../styles/Common.module.css";
import { FaPhoneVolume } from "react-icons/fa";

function ContactMe() {
    return (
        <div className={commonStyle.content_box}>
            <div className={commonStyle.title}>Contact</div>
            <div className={styles.content}>
            <div>
                <FaPhoneVolume/>
                010-2977-5947
            </div>
                <div>y210he@gmail.com</div>
            </div>
            <div></div>
        </div>
    );
}

export default ContactMe;