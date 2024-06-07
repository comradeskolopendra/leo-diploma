import styles from "./main.module.css";

import StartContent from "./contents/start/start";

const Main = () => {

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <StartContent />
                <div id="clubs" className={styles.blue}></div>
                <div id="reviews" className={styles.green}></div>
                <div id="calc" className={styles.yellow}></div>
                <div id="faq" className={styles.purple}></div>
            </section>
        </main>
    )
};

export default Main;