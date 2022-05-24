import { useContext } from 'react';
import { ReverbContext } from '../../contexts/ReverbContext';
import '../../styles/slider-styles/Reverb.css';

function Reverb() {

    const { reverbVal, setReverbVal } = useContext(ReverbContext);

    return (
        <div className=" sliders-general bit-crusher-slider">
            <p>Reverb</p>
            <input onInput={(e) => setReverbVal(e.target.value)} className="slider" type="range" name="slider" min="0" max="10" value={reverbVal} step="1" />
            <div style={{ left: `${(reverbVal / 10) * 100 + "%"}` }} className="slider-thumb">
                <div className="tool-tip">{parseInt(reverbVal)}</div>
            </div>
            <div style={{ width: `${(reverbVal / 10) * 100 + "%"}` }} className="progress"></div>
        </div>
    )
}

export default Reverb;