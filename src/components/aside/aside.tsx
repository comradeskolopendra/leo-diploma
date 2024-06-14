import styles from "./aside.module.css";

import { HashLink } from 'react-router-hash-link';
import appStoreBadge from "../../assets/images/app-store-badge.png";
import googleBadge from "../../assets/images/google-badge.png";


const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav>
                <ul className={styles.listAnchors}>
                    <li>
                        <HashLink className={styles.anchor} to={"/#clubs"}>Фитнесс-клубы</HashLink>
                    </li>
                    <li>
                        <HashLink className={styles.anchor} to={"/#reviews"}>Отзывы</HashLink>
                    </li>
                    <li>
                        <HashLink className={styles.anchor} to={"/#calc"}>Калькулятор</HashLink>
                    </li>
                </ul>
            </nav>

            <section className={styles.downloadApp}>
                <a target="_blank" className={styles.linkApp} href={"https://play.google.com/store/apps/details?id=com.codebusters.onefit"}>
                    <img src={googleBadge} alt="" />
                </a>
                <a target="_blank" className={styles.linkApp} href={"https://apps.apple.com/app/id1375903148"}>
                    <img src={appStoreBadge} alt="" />
                </a>
            </section>
        </aside>
    );
};

export default Aside;