import styles from "./main.module.css";

import Start from "./contents/start/start";
import Clubs from "./contents/clubs/clubs";
import Reviews from "./contents/reviews/reviews";

const Main = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <Start />
                <Clubs />
                <Reviews />
                <div id="calc" className={styles.yellow}></div>
                <div id="faq" className={styles.purple}></div>
            </section>
        </main>
    )
};

export default Main;