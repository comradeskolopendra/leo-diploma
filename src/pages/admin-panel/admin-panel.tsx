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
        <main className={styles.section}>
            <Link to={"/add-club"} className={styles.link}>
                Добавить клуб
            </Link>
            <Link to={"/delete-club"} className={styles.link}>
                Удалить клуб
            </Link>
            <Button onClick={handleClickQuit} className={styles.button} type="button">Выйти</Button>
        </main>
    )
};

export default AdminPanel;