import { useContext } from 'react';
import CrusherContext from '../../contexts/CrusherContext';
import '../../styles/slider-styles/BitCrusher.css';

function BitCrusher() {

    const { bitCrusherVal, setBitCrusherVal, bitCrusherProgress, setBitCrusherProgress } = useContext(CrusherContext);

    function bitCrusherSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setBitCrusherVal(e.target.value);
        setBitCrusherProgress(val);
      }

    return (
            <div className=" sliders-general bit-crusher-slider">
                <p>BitCrusher</p>
                <input onInput={bitCrusherSlider} className="slider" type="range" name="slider" min="1" max="8" value={bitCrusherVal} step="1" />
                <div style={{ left: `${bitCrusherProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{parseInt(bitCrusherVal)}</div>
                </div>
                <div style={{ width: `${bitCrusherProgress}` }} className="progress"></div>
            </div>
    )
}

export default BitCrusher;