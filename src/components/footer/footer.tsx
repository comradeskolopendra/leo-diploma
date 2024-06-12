import { useAppSelector } from "../../redux/hooks";
import styles from "./footer.module.css";

import { Link } from "react-router-dom";

const Footer = () => {
    const userEmail = useAppSelector(store => store.appReducer.userEmail);
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <p>
                    Дипломный проект
                </p>

                <Link to={"/admin-panel"} className={styles.link}>Вы админ?</Link>
            </section>
        </footer>
    )
};

export default Footer;