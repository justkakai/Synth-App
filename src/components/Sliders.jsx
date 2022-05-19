import PingPong from './sliders-components/PingPong';
// import FeedbackDelay from './sliders-components/FeedbackDelay';
import '../styles/Sliders.css';

function Sliders() {

    return (
        <div className="sliders-container">
            <PingPong />
            {/* <FeedbackDelay /> */}
        </div>
    )
}

export default Sliders;