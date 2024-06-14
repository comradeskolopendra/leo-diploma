import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from "../../../../redux/hooks";
import { getStateSlides } from "./selectors";

import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Slide from "./slide/slide";
import styles from "./start.module.css";

const Start = () => {
    const slides = useAppSelector(getStateSlides);

    return (
        <>
            <section id='start' className={styles.start}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={50}
                    loop
                    autoplay={{ delay: 1500 }}
                    pagination={{ clickable: false }}
                    className={styles.swiper}
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
            </section>
        </>
    );
};

export default Start;
