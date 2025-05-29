

import { Robot } from '../componentes/3d/Robot'
import { ButtonLogin } from '../componentes/ButtonLogin/ButtonLogin'
import { Footer } from '../componentes/Footer'
import AnimatedHero from '../componentes/heroAnimate/AnimatedHero'

export const HomeScreen = () => {
    return (
        <div>
            <Robot />
            <AnimatedHero title="HOSTPOT" btn={<ButtonLogin title="LOGIN" />} />
            <Footer />
        </div>
    )
}
