import { useContext } from 'react';
import { PingPongContext } from '../../contexts/PingPongContext';

function PingPong() {

    const { pingPongVal, setPingPongVal } = useContext(PingPongContext);

    return (
        <div className=" sliders-general ping-pong-slider">
            <p>Ping Pong Delay</p>
            <input
                onInput={(e) => setPingPongVal(e.target.value)}
                className="slider" type="range" name="slider" min="0" max="1" value={pingPongVal} step="0.01" />
            <div
                style={{ left: `${(pingPongVal / 1) * 100 + "%"}` }}
                className="slider-thumb">
                <div className="tool-tip">{pingPongVal}</div>
            </div>
            <div
                style={{ width: `${(pingPongVal / 1) * 100 + "%"}` }}
                className="progress">
            </div>
        </div>
    )
}

export default PingPong;