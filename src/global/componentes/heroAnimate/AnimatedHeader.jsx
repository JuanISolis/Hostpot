import { useEffect } from "react";
import { Logo2 } from "../logo/Logo2";
import { useNavigate } from "react-router-dom";
import style from "./buttonLogin.module.css"
import { Robot } from "../3d/robot";

const HeroFinisher = () => {


    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate("/login");
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/finisher-header.es5.min.js";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
            new window.FinisherHeader({
                count: 60,
                size: {
                    min: 1,
                    max: 84,
                    pulse: 0,
                },
                speed: {
                    x: {
                        min: 0,
                        max: 0.4,
                    },
                    y: {
                        min: 0,
                        max: 0.1,
                    },
                },
                colors: {
                    background: "#14386d",
                    particles: ["#ffffff", "#87ddfe", "#acaaff", "#f88aff"],
                },
                blending: "screen",
                opacity: {
                    center: 0,
                    edge: 0.4,
                },
                skew: 0,
                shapes: ["c", "s", "t"],
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (


        <section
            className="finisher-header"
            style={{
                width: "100%",
                height: "80vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
                padding: "2rem",
            }}
        >

            <Robot />
            <div style={{ zIndex: 1 }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    <Logo2 />
                </h1>
                <p style={{ fontSize: "4rem", color: "#fff" }}>
                    HOSTPOT
                </p>


                <button className={style.btnLogin} onClick={handleClickLogin}>LOGIN</button>
            </div>
        </section>
    );
};

export default HeroFinisher;
