import React, { useState } from 'react';
import * as Tone from 'tone';
import { notes, KEY_TO_NOTE } from './Notes';
import AppContext from './contexts/AppContext';
import Sliders from './components/Sliders';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {

  const [sliderVal, setSliderVal] = useState("0.5");
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
    const delay = new Tone.PingPongDelay("4n", parseFloat(sliderVal)).toDestination();
    const synth = new Tone.FMSynth().toDestination().connect(delay);
    const now = Tone.now();
    synth.triggerAttackRelease(note, "4n", now);
  }

  window.addEventListener("keypress", function (e) {
    playNote(KEY_TO_NOTE[e.key]);
  })

  const providerValues = { sliderVal, setSliderVal, progressWidth, setProgressWidth, thumbLeft, setThumbLeft, customSlider, playNote };

  return (
    <AppContext.Provider value={providerValues}>
      <main className="App">
        <Sliders />
        <Keyboard />
      </main>
    </AppContext.Provider>
  );
}

export default App;
