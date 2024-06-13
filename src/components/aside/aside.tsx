import styles from "./aside.module.css";

import googleBadge from "../../assets/images/google-badge.png";
import appStoreBadge from "../../assets/images/app-store-badge.png";

const Aside = () => {

    // const handleClick = (id: string) => {
    //     const toTop = id.includes("clubs") ? 0 : id.includes("reviews") ? 1200 : 2400;
    //     window.scrollTo({
    //         top: toTop,
    //         behavior: "smooth"
    //     })
    // }

    return (
        <aside className={styles.aside}>
            <nav>
                <ul className={styles.listAnchors}>
                    <li>
                        <a className={styles.anchor} href={"#clubs"}>Фитнесс-клубы</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href={"#reviews"}>Отзывы</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href={"#calc"}>Калькулятор</a>
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