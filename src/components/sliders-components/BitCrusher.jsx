import { useContext } from 'react';
import { CrusherContext } from '../../contexts/CrusherContext';

function BitCrusher() {

    const { bitCrusherVal, setBitCrusherVal } = useContext(CrusherContext);

    return (
        <div className=" sliders-general bit-crusher-slider">
            <p>BitCrusher</p>
            <input onInput={(e) => setBitCrusherVal(e.target.value)} className="slider" type="range" name="slider" min="0" max="8" value={bitCrusherVal} step="1" />
            <div style={{ left: `${(bitCrusherVal / 8) * 100 + "%"}` }} className="slider-thumb">
                <div className="tool-tip">{parseInt(bitCrusherVal)}</div>
            </div>
            <div style={{ width: `${(bitCrusherVal / 8) * 100 + "%"}` }} className="progress"></div>
        </div>
    )
}

export default BitCrusher;