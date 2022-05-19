import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function PingPong() {

    const { pingPongVal, setPingPongVal, pingPongProgress, setPingPongProgress, pingPongSlider, playNote, stopSound } = useContext(AppContext);

    return (
            <div className="ping-pong-slider">
                <input onInput={pingPongSlider} className="slider" type="range" name="slider" min="0" max="1" value={pingPongVal} step="0.01" />
                <div style={{ left: `${pingPongProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{pingPongVal}</div>
                </div>
                <div style={{ width: `${pingPongProgress}` }} className="progress"></div>
            </div>
    )
}

export default PingPong;