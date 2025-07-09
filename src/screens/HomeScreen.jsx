

import BackgroundVideo from '../componentes/backgroundVideo/BackgroundVideo'
import { Footer } from '../componentes/Footer'
import styles from './HomeScreen.module.css'


export const HomeScreen = () => {
    return (
        <div className={styles.homescreen} >

            <BackgroundVideo />
            <Footer />
        </div>
    )
}
