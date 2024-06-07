import styles from "./aside.module.css";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav>
                <dl className={styles.listAnchors}>
                    <li>
                        <a className={styles.anchor} href="#start">В начало</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href="#clubs">Фитнесс-клубы</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href="#reviews">Отзывы</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href="#calc">Калькулятор</a>
                    </li>
                    <li>
                        <a className={styles.anchor} href="#faq">FAQ</a>
                    </li>
                </dl>
            </nav>
        </aside>
    );
};

export default Aside;