import { useEffect } from "react";
import styleHero from "./AnimatedHerov2.module.css";
import style from "../../screens/hotelTourismScreen.module.css";
import imgHotel1 from "../../assetsCris/hotel/hotel1.jpeg";
import imgHotel2 from "../../assetsCris/hotel/hotel2.jpeg";
import imgHotel3 from "../../assetsCris/hotel/hotel3.jpeg";
import { CarrouselSwiper } from "../carrousel/CarrouselSwiper";
import { Footer } from "../Footer";

const AnimatedHerov2 = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/finisher-header.es5.min.js";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
            new window.FinisherHeader({
                count: 16,
                size: {
                    min: 1300,
                    max: 1500,
                    pulse: 0,
                },
                speed: {
                    x: {
                        min: 0.1,
                        max: 0.6,
                    },
                    y: {
                        min: 0.1,
                        max: 0.6,
                    },
                },
                colors: {
                    background: "#9138e5",
                    particles: [
                        "#ff4848",
                        "#000000",
                        "#2235e5",
                        "#000000",
                        "#ff0000",
                    ],
                },
                blending: "overlay",
                opacity: {
                    center: 0.5,
                    edge: 0.05,
                },
                skew: 0,
                shapes: ["c"],
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (

        <>
            <div style={{ position: "relative" }}>
                <div
                    className={`${styleHero.AnimatedHero} finisher-header`}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                    }}
                ></div>


                <section
                    style={{
                        padding: "2rem",
                        minHeight: "100vh",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <div className={style.HotelTourismScreen}>
                        <div className={style.cardHotel}>
                            <img src={imgHotel1} alt="imagen de hotel 1" />
                            <p>shushufindi central</p>
                            <p>avenida unidad nacional y xxx</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel2} alt="imagen de hotel 2" />
                            <p>shushufindi , Barrio Eloy Alfaro </p>
                            <p>Calle Siona Y Calle 3B</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                        <div className={style.cardHotel}>
                            <img src={imgHotel3} alt="imagen de hotel 3" />
                            <p>shushufindi, 7 DE junio</p>
                            <p>frente al control Policial</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AnimatedHerov2;
