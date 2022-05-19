import React, { useState } from 'react';
import * as Tone from 'tone';
import { notes, KEY_TO_NOTE } from './Notes';
import AppContext from './contexts/AppContext';
import Sliders from './components/Sliders';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {

  const [pingPongVal, setPingPongVal] = useState("0.5");
  const [pingPongProgress, setPingPongProgress] = useState("50%");

  function pingPongSlider(e) {
    const maxVal = e.target.max;
    const val = (e.target.value / maxVal) * 100 + "%";
    setPingPongVal(e.target.value);
    setPingPongProgress(val);
  }

  function playNote(note) {
    const pingPongDelay = new Tone.PingPongDelay("4n", parseFloat(pingPongVal)).toDestination();
    const autoWah = new Tone.AutoWah(100, 2, -300).toDestination();
    const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
    const synth = new Tone.Synth().toDestination().connect(pingPongDelay).connect(autoWah).connect(feedbackDelay);
    autoWah.Q.value = 1;
    const now = Tone.now();
    synth.triggerAttackRelease(note, "4n", now);
  }

  function stopSound() {
    Tone.Transport.stop();
  }

  window.addEventListener("keypress", function (e) {
    playNote(KEY_TO_NOTE[e.key]);
  })

  const providerValues = { pingPongVal, setPingPongVal, pingPongProgress, setPingPongProgress, pingPongSlider, playNote, stopSound };

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
