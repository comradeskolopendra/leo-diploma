import { FC } from "react";
import styles from "./review.module.css";

interface ReviewProps {
    description: string;
    name: string;
    weight: number;
    photo: string;
    extInfo: string;
}

const Review: FC<ReviewProps> = ({ name, description, weight, photo, extInfo }) => {
    return (
        <article className={styles.review}>
            <h2 className={styles.weight}>{weight} кг!</h2>
            <p className={styles.description}>{description}</p>

            <h3 className={styles.name}>{name}</h3>
            <img className={styles.photo} src={photo} alt={`Посетитель ${name}`} />

            {extInfo && <p className={styles.extInfo}>{extInfo}</p>}
        </article>
    )
};

export default Review;