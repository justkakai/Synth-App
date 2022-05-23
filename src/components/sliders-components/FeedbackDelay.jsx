import { useContext } from 'react';
import FeedbackContext from '../../contexts/FeedbackContext';
import '../../styles/slider-styles/FeedbackDelay.css';

function FeedbackDelay() {

    const { feedbackVal, setFeedbackVal, feedbackProgress, setFeedbackProgress } = useContext(FeedbackContext);

    function FeedbackSlider(e) {
        const maxVal = e.target.max;
        const val = (e.target.value / maxVal) * 100 + "%";
        setFeedbackVal(e.target.value);
        setFeedbackProgress(val);
      }

    return (
            <div className=" sliders-general feedback-slider">
                <p>Feedback Delay</p>
                <input onInput={FeedbackSlider} className="slider" type="range" name="slider" min="0" max="1" value={feedbackVal} step="0.01" />
                <div style={{ left: `${feedbackProgress}` }} className="slider-thumb">
                    <div className="tool-tip">{feedbackVal}</div>
                </div>
                <div style={{ width: `${feedbackProgress}` }} className="progress"></div>
            </div>
    )
}

export default FeedbackDelay;