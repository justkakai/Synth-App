import PingPong from './sliders-components/PingPong';
import Chebyshev from './sliders-components/Chebyshev';
import BitCrusher from './sliders-components/BitCrusher';
import '../styles/Sliders.css';

function Sliders() {

    return (
        <section className="sliders-container">
            <PingPong />
            <Chebyshev />
            <BitCrusher />
        </section>
    )
}

export default Sliders;

