

import { Robot } from '../componentes/3d/Robot'
import BackgroundVideo from '../componentes/backgroundVideo/BackgroundVideo'
import { Footer } from '../componentes/Footer'
import styles from './HomeScreen.module.css'


export const HomeScreen = () => {
    return (
        <div className={styles.homescreen} >
            {/* <Robot /> */}
            <BackgroundVideo />
            <Footer />
        </div>
    )
}
