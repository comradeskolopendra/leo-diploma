import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <h1>
                    Good
                    <span>
                        lyfe
                    </span>
                </h1>
            </div>
        </header>
    )
};

export default Header;