import React, { Suspense, useState, useEffect } from 'react';
import style from './robot.module.css';
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const Robot = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if ('requestIdleCallback' in window) {
            const idle = requestIdleCallback(() => setShow(true), { timeout: 2000 });
            return () => cancelIdleCallback(idle);
        } else {
            const timeout = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timeout);
        }
    }, []);

    return (
        <>
            <ButtonLogin title="Login" />
            <div className={style.Robot}>
                {show && (
                    <Suspense fallback={<div className={style.loader}>Cargando escena 3D...</div>}>
                        <div className={style.fadeIn}>
                            <Spline scene="https://prod.spline.design/zoSiUu3wN8Aytz0v/scene.splinecode" />
                        </div>
                    </Suspense>
                )}
            </div>
        </>
    );
};
