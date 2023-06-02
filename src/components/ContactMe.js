import contactStyle from "../styles/ContactMe.module.css";
import commonStyle from "../styles/Common.module.css";

function ContactMe() {
    function Info ({ label, text }) {
        return (
            <div className={contactStyle.info_box}>
                <div className={contactStyle.icon}>{label}</div>
                <div className={contactStyle.iconInfo}>{text}</div>
            </div>
        );
    }

    return (
        <div className={contactStyle.content_box}>
            <div className={contactStyle.title}>Contact</div>
            <div>
                <div className={contactStyle.contactAdd}>
                    <Info label="Name" text="Yang Haeun"/>
                    <Info label="Phone" text="010-2977-5947"/>
                    <Info label="E-mail" text="y210he@gmail.com" />
                    <Info label="Github" text="https://github.com/yaangha" />
                </div>
                <img className={contactStyle.img} src="image/me.JPG" alt="me"/>
            </div>
        </div>
    );
}

export default ContactMe;