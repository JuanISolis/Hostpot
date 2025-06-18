import React, { useState, useEffect, useRef } from "react";
import styles from "./cardCarrousel.module.css";

const images = [
    "https://picsum.photos/300/300/?random&1",
    "https://picsum.photos/300/300/?random&2",
    "https://picsum.photos/300/300/?random&3",
    "https://picsum.photos/300/300/?random&4",
    "https://picsum.photos/300/300/?random&5",
    "https://picsum.photos/300/300/?random&6",
    "https://picsum.photos/300/300/?random&7",
    "https://picsum.photos/300/300/?random&8",
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = images.length;
    const trackRef = useRef(null);


    const mod = (n, m) => ((n % m) + m) % m;

    const getClassName = (index) => {
        let diff = index - activeIndex;
        if (diff < -length / 2) diff += length;
        if (diff > length / 2) diff -= length;

        switch (diff) {
            case 0:
                return `${styles.carouselItem} ${styles.big}`;
            case 1:
                return `${styles.carouselItem} ${styles.medium} ${styles.mdright}`;
            case -1:
                return `${styles.carouselItem} ${styles.medium} ${styles.mdleft}`;
            case 2:
                return `${styles.carouselItem} ${styles.smallRight}`;
            case -2:
                return `${styles.carouselItem} ${styles.smallLeft}`;
            default:
                return styles.carouselItem;
        }
    };




    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const activeItem = track.children[activeIndex];
        if (!activeItem) return;


        const containerWidth = track.parentElement.offsetWidth;
        const activeItemOffset = activeItem.offsetLeft + activeItem.offsetWidth / 2;


        const scrollAmount = activeItemOffset - containerWidth / 2;


        track.style.transform = `translateX(${-scrollAmount}px)`;
    }, [activeIndex]);

    const prev = () => {
        setActiveIndex(mod(activeIndex - 1, length));
    };

    const next = () => {
        setActiveIndex(mod(activeIndex + 1, length));
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.buttonPrev} onClick={prev} aria-label="Previous">
                ‹
            </button>
            <div className={styles.carouselTrack} ref={trackRef}>
                {images.map((src, i) => (
                    <div key={i} className={getClassName(i)}>
                        <img src={src} alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </div>
            <button className={styles.buttonNext} onClick={next} aria-label="Next">
                ›
            </button>
        </div>
    );
}
