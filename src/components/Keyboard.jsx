import { useContext } from 'react';
import { notes } from '../Notes';
import AppContext from '../contexts/AppContext';
import '../styles/Keyboard.css';

function Keyboard() {

    const {sliderVal, setSliderVal, progressWidth, setProgressWidth, thumbLeft, setThumbLeft, customSlider, playNote} = useContext(AppContext);

    return (
        <div className="keyboard">
          <div className="keys-row">
            {notes.map(({ note, noteOctave, keysClasses }) => (
              <button className={keysClasses} onClick={() => playNote(noteOctave)}>{note}</button>
            ))}
          </div>
        </div>
    )
}

export default Keyboard;