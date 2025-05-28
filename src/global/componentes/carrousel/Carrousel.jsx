// Carousel.jsx
import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import styles from './carrousel.module.css'

import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

import slide1 from "../../../assetsCris/slide1.webp"
import slide2 from "../../../assetsCris/slide2.webp"
import slide3 from "../../../assetsCris/slide3.webp"
import slide4 from "../../../assetsCris/slide4.webp"
const Carousel = () => {
    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            focusAt: 'center',
        })
        glide.mount()
    }, [])

    return (
        <div className={`glide ${styles.glideWrapper}`}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide"><img src={slide1} alt="slide1" /></li>
                    <li className="glide__slide"><img src={slide2} alt="slide2" /></li>
                    <li className="glide__slide"><img src={slide3} alt="slide3" /></li>
                    <li className="glide__slide"><img src={slide4} alt="slide4" /></li>
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
        </div>
    )
}

export default Carousel
