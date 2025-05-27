import Spline from '@splinetool/react-spline';
import style from './robot.module.css';
import { useRef } from 'react';

export const Robot = () => {


    const robotRef = useRef(null);

    const handleClick = () => {
        const robot = robotRef.current;
        if (robot) {
            robot.classList.add('jump');
            setTimeout(() => robot.classList.remove('jump'), 600); // duración de la animación
        }
    };
    return (<div className={style.Robot}
        ref={robotRef}
        onClick={handleClick}
    >
        <Spline scene="https://prod.spline.design/1ExdN7C30UAhpf0d/scene.splinecode" />
    </div>
    )
}
