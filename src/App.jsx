import React, {useState} from 'react';
import * as Tone from 'tone';
import { notes, KEY_TO_NOTE } from './Notes';
import './App.css';

function App() {


  const [sliderVal, setSliderVal] = useState("50");
  const [progressWidth, setProgressWidth] = useState("50%");
  const [thumbLeft, setThumbLeft] = useState("50%");

  function customSlider(e) {
    const maxVal = e.target.max;
    const val = (e.target.value / maxVal) * 100 + "%";
    setSliderVal(e.target.value);
    setProgressWidth(val);
    setThumbLeft(val);
  }

  function playNote(note) {
    const delay = new Tone.Distortion(0.1).toDestination();
    const synth = new Tone.FMSynth().toDestination().connect(delay);
    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now);
  }

  window.addEventListener("keypress", function(e) {
    playNote(KEY_TO_NOTE[e.key]);
  })

  return (
    <main className="App">
      <div className="range-slider">
        <input onInput={customSlider} className="slider" type="range" name="slider" min="0" max="100" value={sliderVal} step="10" />
        <div style={{left: `${thumbLeft}`}} className="slider-thumb">
          <div className="tool-tip">{sliderVal}</div>
        </div>
        <div style={{width: `${progressWidth}`}} className="progress"></div>
      </div>
      <div className="keyboard">
        <div className="keys-row">
          {notes.map(({ note, noteOctave, keysClasses }) => (
            <button className={keysClasses} onClick={() => playNote(noteOctave)}>{note}</button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
