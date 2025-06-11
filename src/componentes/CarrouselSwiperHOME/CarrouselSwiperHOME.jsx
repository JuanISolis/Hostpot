import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imgCarrousel1 from "../../assetsCris/images/1.png";
import imgCarrousel2 from "../../assetsCris/images/2.png";
import imgCarrousel3 from "../../assetsCris/images/3.png";
import imgCarrousel4 from "../../assetsCris/images/4.png";
import imgCarrousel5 from "../../assetsCris/images/5.png";
import styles from "./carrousel.module.css";

const images = [imgCarrousel1, imgCarrousel2, imgCarrousel3, imgCarrousel4, imgCarrousel5];

export const CarrouselSwiperHOME = () => (
    <div className={styles.containerMain}>
        <div className={styles.containerCarrousel}>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={{
                    nextEl: `.${styles.nextButton}`,
                    prevEl: `.${styles.prevButton}`
                }}
                pagination={{
                    clickable: true,
                    el: `.${styles.pagination}`
                }}
                centeredSlides={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
                className={styles.swiperContainer}
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i} className={styles.swiperSlide}>
                        <div className={styles.imageContainer}>
                            <img
                                src={src}
                                alt={`Imagen ${i + 1} del carrusel`}
                                className={styles.carrouselImage}
                            />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    </div>
);