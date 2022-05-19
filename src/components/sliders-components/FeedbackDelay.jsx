import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import '../../styles/slider-styles/FeedbackDelay.css';

function FeedbackDelay() {

    const { feedbackVal, setFeedbackVal, feedbackProgress, setFeedbackProgress, playNote, stopSound } = useContext(AppContext);

    function pingPongSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setFeedbackVal(e.target.value);
        setFeedbackProgress(val);
      }

    return (
            <div className=" sliders-general feedback-slider">
                <input onInput={pingPongSlider} className="slider" type="range" name="slider" min="0" max="1" value={feedbackVal} step="0.01" />
                <div style={{ left: `${feedbackProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{feedbackVal}</div>
                </div>
                <div style={{ width: `${feedbackProgress}` }} className="progress"></div>
            </div>
    )
}

export default FeedbackDelay;