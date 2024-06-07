import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

import styles from "./start.module.css";
import { useMemo } from "react";

import girl from "../../../../assets/images/girl.jpg";
import griefs from "../../../../assets/images/griefs.jpg";
import person from "../../../../assets/images/person.jpg";
import running from "../../../../assets/images/running.jpg";

interface SlidesModel {
    image: string;
    textContent: string;
}

const StartContent = () => {


    const slides = useMemo<SlidesModel[]>(() => {
        return [
            {
                image: girl,
                textContent: "Добро пожаловать"
            },
            {
                image: running,
                textContent: "Встречай свое новое тело"
            },
            {
                image: griefs,
                textContent: "Ты можешь быть лучше, чем ты есть"
            },
            {
                image: person,
                textContent: "Больше усилий делают тебя сильнее"
            }
        ]
    }, [])

    return (
        <section id='start' className={styles.start}>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop
                pagination={{ clickable: false }}
            >
                {
                    slides.map((item) => (
                        <SwiperSlide
                            key={item.image}
                            className={styles.slide}
                        >
                            <div className={styles.imageBG} style={{ backgroundImage: `url(${item.image})` }}>
                                <h3 className={styles.slideTitle}>
                                    {item.textContent}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default StartContent;
