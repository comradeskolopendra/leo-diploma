
import styles from "./preloader.module.css";

const Preloader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner} />
            <p>Идет загрузка</p>
        </div>
    )
}

export default Preloader;