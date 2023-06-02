import bioStyles from "../styles/AboutMe.module.css";

function Certificate({ pass, date, name }) {
    return (
        <li>
            <div>
                <span className={bioStyles.certificate_pass}>{pass}</span>
                <span className={bioStyles.certificate_date}>{date}</span>
            </div>
            <div className={bioStyles.certificate_name}>{name}</div>
        </li>
    );
}

export default Certificate;