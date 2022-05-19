import PingPong from './sliders-components/PingPong';
import FeedbackDelay from './sliders-components/FeedbackDelay';
import BitCrusher from './sliders-components/BitCrusher';
import '../styles/Sliders.css';

function Sliders() {

    return (
        <div className="sliders-container">
            <PingPong />
            <FeedbackDelay />
            <BitCrusher />
        </div>
    )
}

export default Sliders;