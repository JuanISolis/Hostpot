import { useEffect } from "react";
import styleHero from "./AnimatedHero.module.css";

const AnimatedHero = ({ title, btn }) => {

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
        <section
            className={`${styleHero.AnimatedHero} finisher-header`}
            style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <div style={{ zIndex: 1 }}>
                {/* <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    <LogoBig />
                </h1> */}
                <p style={{ fontSize: "4rem", color: "#fff", fontFamily: "Playfair Display" }}>
                    {title}
                </p>
                {btn}
            </div>
        </section>
    );
};

export default AnimatedHero;
