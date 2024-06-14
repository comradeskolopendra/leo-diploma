
import { useAppSelector } from "../../../../redux/hooks";
import { getStateReviews } from "./selectors";

import Review from "./review/review";
import styles from "./reviews.module.css";

const Reviews = () => {
    const reviews = useAppSelector(getStateReviews);

    return (
        <>
            <section id="reviews">
                <h2 className={styles.title}>Обзоры от реальных людей</h2>
                <section className={styles.reviews}>
                    {reviews.map(item => (
                        <Review
                            description={item.description}
                            name={item.name}
                            photo={item.photo}
                            weight={item.weight}
                            extInfo={item.extInfo}
                            key={item.photo}
                        />
                    ))}
                </section>
            </section>
        </>
    )
};

export default Reviews;