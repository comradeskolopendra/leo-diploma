import styles from "./main.module.css";

import Calculator from "./contents/calculator/calculator";
import Clubs from "./contents/clubs/clubs";
import Reviews from "./contents/reviews/reviews";
import Start from "./contents/start/start";

import Aside from "../../components/aside/aside";
import Footer from "../../components/footer/footer";

const Main = () => {
    return (
        <>
            <Aside />
            <main className={styles.main}>
                <section className={styles.section}>
                    <Start />
                    <Clubs />
                    <Reviews />
                    <Calculator />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Main;