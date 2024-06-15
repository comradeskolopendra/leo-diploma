import styles from "./main.module.css";

import Calculator from "./contents/calculator/calculator";
import Clubs from "./contents/clubs/clubs";
import Reviews from "./contents/reviews/reviews";
import Start from "./contents/start/start";

import Aside from "../../components/aside/aside";
import Footer from "../../components/footer/footer";
import Preloader from "../../components/preloader/preloader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getStateIsContentLoading } from "./selectors";
import { useEffect } from "react";
import { setClubs, setContentLoading, setReviews, setSlides } from "../../redux/store";
import { urls } from "../../constants";

const Main = () => {
    const dispatch = useAppDispatch();
    const isContentLoading = useAppSelector(getStateIsContentLoading);

    useEffect(() => {
        dispatch(setContentLoading(true))

        Promise.all(urls.map(url =>
            fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok for ${url}`);
                }
                return response.json(); // Read the response body as JSON
            })
        ))
            .then(data => {
                console.log(data);
                const [clubs, reviews, slides] = data;

                dispatch(setSlides(slides));
                dispatch(setClubs(clubs));
                dispatch(setReviews(reviews));
            }).finally(() => {
                dispatch(setContentLoading(false))
            })
    }, [])

    return (
        <>
            {isContentLoading && <Preloader />}
            {!isContentLoading && (
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
            )}
        </>
    )
};

export default Main;