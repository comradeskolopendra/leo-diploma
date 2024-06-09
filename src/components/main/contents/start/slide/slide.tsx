import { FC } from "react";

import styles from "./slide.module.css";

interface SlideProps {
    image: string;
    title: string;
}

const Slide: FC<SlideProps> = ({ image, title }) => {

    return (
        <div className={styles.imageBG} style={{ backgroundImage: `url(${image})` }}>
            <h3 className={styles.slideTitle}>
                {title}
            </h3>
        </div>
    )
}

export default Slide;