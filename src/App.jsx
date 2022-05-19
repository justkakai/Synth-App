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
  const [feedbackVal, setFeedbackVal] = useState("0.5");
  const [feedbackProgress, setFeedbackProgress] = useState("50%");
  const [bitCrusherVal, setBitCrusherVal] = useState("8");
  const [bitCrusherProgress, setBitCrusherProgress] = useState("100%");

  function playNote(note) {

    // Tone.context.lookAhead = 0;

    const pingPongDelay = new Tone.PingPongDelay("4n", parseFloat(pingPongVal)).toDestination();

    /*  const autoWah = new Tone.AutoWah(100, 2, -300).toDestination();
        autoWah.Q.value = 1;  */

    const feedbackDelay = new Tone.FeedbackDelay(0.125, parseFloat(feedbackVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    // const oscillator = new Tone.Oscillator().connect(feedbackDelay).start();

    const synth = new Tone.MetalSynth().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher);

    const now = Tone.now();
    synth.triggerAttackRelease(note, "4n", now);
  }


  function stopSound() {
    Tone.Transport.stop();
  }


  window.addEventListener("keypress", function (e) {
    playNote(KEY_TO_NOTE[e.key]);
  })

  const providerValues = { pingPongVal, setPingPongVal, pingPongProgress, setPingPongProgress, feedbackVal, setFeedbackVal, feedbackProgress, setFeedbackProgress, bitCrusherVal, setBitCrusherVal, bitCrusherProgress, setBitCrusherProgress, playNote, stopSound };

  return (
    <AppContext.Provider value={providerValues}>
      <main className="App">
        <h1>VirtuoSynth</h1>
        <Sliders />
        <Keyboard />
      </main>
    </AppContext.Provider>
  );
}

export default App;
