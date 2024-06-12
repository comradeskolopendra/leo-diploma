import { Link } from "react-router-dom";
import styles from "./admin-panel.module.css";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../redux/hooks";
import { clearUserInfo } from "../../redux/store";

const AdminPanel = () => {
    const dispatch = useAppDispatch();

    const handleClickQuit = () => {
        dispatch(clearUserInfo());
    };

    return (
        <section className={styles.section}>
            <Link to={"/add-club"} className={styles.link}>
                Добавить клуб
            </Link>
            <Button onClick={handleClickQuit} className={styles.button} type="button">Выйти</Button>
        </section>
    )
};

export default AdminPanel;