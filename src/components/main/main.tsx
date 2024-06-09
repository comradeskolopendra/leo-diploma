import styles from "./main.module.css";

import Calculator from "./contents/calculator/calculator";
import Clubs from "./contents/clubs/clubs";
import Reviews from "./contents/reviews/reviews";
import Start from "./contents/start/start";

const Main = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <Start />
                <Clubs />
                <Reviews />
                <Calculator />
            </section>
        </main>
    )
};

export default Main;