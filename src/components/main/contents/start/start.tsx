import { useEffect } from "react";
import { getData } from "../../../../firebase/helpers";
import { setSlides } from "../../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getStateSlides, getStateSlidesLoading } from "./selectors";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Slide from "./slide/slide";
import styles from "./start.module.css";

const Start = () => {
    const dispatch = useAppDispatch();
    const slides = useAppSelector(getStateSlides);
    const slidesLoading = useAppSelector(getStateSlidesLoading);

    useEffect(() => {
        getData("slides").then(data => {
            dispatch(setSlides(data));
        })
    }, [])

    return (
        <>
            {slidesLoading && slides.length === 0 && <h2 className={styles.loading}>Loading...</h2>}
            {!slidesLoading && slides.length > 0 && <section id='start' className={styles.start}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={50}
                    loop
                    autoplay={{ delay: 1500 }}
                    pagination={{ clickable: false }}
                    allowTouchMove={false}
                >
                    {
                        slides.map((item) => (

                            <SwiperSlide
                                key={item.image}
                                className={styles.slide}
                            >
                                <Slide
                                    image={item.image}
                                    title={item.title}
                                    key={item.image}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>}
        </>
    );
};

export default Start;
