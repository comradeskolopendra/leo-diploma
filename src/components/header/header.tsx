import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <Link to={"/"} className={styles.logo}>
                    Good
                    <span>
                        lyfe
                    </span>
                </Link>
            </div>
        </header>
    )
};

export default Header;