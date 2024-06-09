import styles from "./aside.module.css";

const Aside = () => {

    const handleClick = (id: string) => {
        const toTop = id.includes("clubs") ? 0 : id.includes("reviews") ? 1200 : 2400;
        window.scrollTo({
            top: toTop,
            behavior: "smooth"
        })
    }

    return (
        <aside className={styles.aside}>
            <nav>
                <ul className={styles.listAnchors}>
                    <li>
                        <button className={styles.anchor} onClick={() => handleClick("#clubs")}>Фитнесс-клубы</button>
                    </li>
                    <li>
                        <button className={styles.anchor} onClick={() => handleClick("#reviews")}>Отзывы</button>
                    </li>
                    <li>
                        <button className={styles.anchor} onClick={() => handleClick("#calc")}>Калькулятор</button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;