import React from 'react'
import Styles from "./BackgroundVideo.module.css";

import video from "../../assetsCris/video/WhatsApp Video 2025-07-04 at 02.01.50.mp4";
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';


const BackgroundVideo = () => {
    return (
        <div className={Styles.videocontainer}>
            <video
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type="video/mp4" />

            </video>
            <ButtonLogin title="Login" />
        </div>
    );
};

export default BackgroundVideo;
