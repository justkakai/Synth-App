import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import '../styles/Sliders.css';

function Sliders() {
    
    const {sliderVal, setSliderVal, progressWidth, setProgressWidth, thumbLeft, setThumbLeft, customSlider, playNote} = useContext(AppContext);

    return (
        <div className="range-slider">
          <input onInput={customSlider} className="slider" type="range" name="slider" min="0" max="1" value={sliderVal} step="0.01" />
          <div style={{ left: `${thumbLeft}` }} className="slider-thumb">
            <div className="tool-tip">{sliderVal}</div>
          </div>
          <div style={{ width: `${progressWidth}` }} className="progress"></div>
        </div>
    )
}

export default Sliders;