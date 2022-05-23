import { useContext } from 'react';
import PingPongContext from '../../contexts/PingPongContext';
import '../../styles/slider-styles/PingPong.css';

function PingPong() {

    const { pingPongVal, setPingPongVal, pingPongProgress, setPingPongProgress } = useContext(PingPongContext);

    function pingPongSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setPingPongVal(e.target.value);
        setPingPongProgress(val);
      }

    return (
            <div className=" sliders-general ping-pong-slider">
                <p>Ping Pong Delay</p>
                <input onInput={pingPongSlider} className="slider" type="range" name="slider" min="0" max="1" value={pingPongVal} step="0.01" />
                <div style={{ left: `${pingPongProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{pingPongVal}</div>
                </div>
                <div style={{ width: `${pingPongProgress}` }} className="progress"></div>
            </div>
    )
}

export default PingPong;