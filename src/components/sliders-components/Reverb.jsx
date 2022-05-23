import { useContext } from 'react';
import ReverbContext from '../../contexts/ReverbContext';
import '../../styles/slider-styles/Reverb.css';

function Reverb() {

    const { reverbVal, setReverbVal, reverbProgress, setReverbProgress } = useContext(ReverbContext);

    function reverbSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setReverbVal(e.target.value);
        setReverbProgress(val);
      }

    return (
            <div className=" sliders-general bit-crusher-slider">
                <p>Reverb</p>
                <input onInput={reverbSlider} className="slider" type="range" name="slider" min="0" max="10" value={reverbVal} step="1" />
                <div style={{ left: `${reverbProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{parseInt(reverbVal)}</div>
                </div>
                <div style={{ width: `${reverbProgress}` }} className="progress"></div>
            </div>
    )
}

export default Reverb;