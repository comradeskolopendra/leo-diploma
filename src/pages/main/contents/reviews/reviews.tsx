import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setReviews, setReviewsLoading } from "../../../../redux/store";
import { getStateReviews, getStateReviewsLoading } from "./selectors";

import { request } from "../../../../helpers";
import Review from "./review/review";
import styles from "./reviews.module.css";


const Reviews = () => {
    const dispatch = useAppDispatch();
    const reviews = useAppSelector(getStateReviews);
    const reviewsLoading = useAppSelector(getStateReviewsLoading);

    useEffect(() => {
        dispatch(setReviewsLoading());

        request("getRevs").then(data => {
            dispatch(setReviews(data));
        })
    }, [])

    return (
        <>
            {reviewsLoading && reviews.length === 0 && <h2 className={styles.loading}>Loading...</h2>}
            {!reviewsLoading && reviews.length > 0 &&
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
            }
        </>
    )
};

export default Reviews;