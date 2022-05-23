import { useContext } from 'react';
import ChebyshevContext from '../../contexts/ChebyshevContext';
import '../../styles/slider-styles/Chebyshev.css';

function Chebyshev() {

    const { chebyshevVal, setChebyshevVal, chebyshevProgress, setChebyshevProgress } = useContext(ChebyshevContext);

    function ChebyshevSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setChebyshevVal(e.target.value);
        setChebyshevProgress(val);
      }

    return (
            <div className=" sliders-general chebyshev-slider">
                <p>Chebyshev</p>
                <input onInput={ChebyshevSlider} className="slider" type="range" name="slider" min="0" max="1" value={chebyshevVal} step="0.01" />
                <div style={{ left: `${chebyshevProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{chebyshevVal}</div>
                </div>
                <div style={{ width: `${chebyshevProgress}` }} className="progress"></div>
            </div>
    )
}

export default Chebyshev;