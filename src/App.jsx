import React, { useState } from 'react';
import * as Tone from 'tone';
import { KEY_TO_NOTE } from './Notes';
import AppContext from './contexts/AppContext';
import PingPongContext from './contexts/PingPongContext';
import FeedbackContext from './contexts/FeedbackContext';
import CrusherContext from './contexts/CrusherContext';
import InstrumentsContext from './contexts/InstrumentsContext';
import Sliders from './components/Sliders';
import Instruments from './components/Instruments';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {

  const [pingPongVal, setPingPongVal] = useState("0.5");
  const [pingPongProgress, setPingPongProgress] = useState("50%");
  const [feedbackVal, setFeedbackVal] = useState("0.5");
  const [feedbackProgress, setFeedbackProgress] = useState("50%");
  const [bitCrusherVal, setBitCrusherVal] = useState("8");
  const [bitCrusherProgress, setBitCrusherProgress] = useState("100%");
  const [instrument, setInstrument] = useState("Synth");

  function playNote(note) {

    // Tone.context.lookAhead = 0;

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    /*  const autoWah = new Tone.AutoWah(100, 2, -300).toDestination();
        autoWah.Q.value = 1;  */

    const feedbackDelay = new Tone.FeedbackDelay(0.125, parseFloat(feedbackVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    // const oscillator = new Tone.Oscillator().connect(feedbackDelay).start();

    const synth = new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher);

    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now);
  }

  function stopSound() {
    Tone.Transport.stop();
  }

  window.addEventListener("keypress", function (e) {
    playNote(KEY_TO_NOTE[e.key]);
  })

  const appValues = { playNote, stopSound };

  const pingPongValues = { pingPongVal, setPingPongVal, pingPongProgress, setPingPongProgress }

  const feedbackValues = { feedbackVal, setFeedbackVal, feedbackProgress, setFeedbackProgress }

  const crusherValues = { bitCrusherVal, setBitCrusherVal, bitCrusherProgress, setBitCrusherProgress }

  const instrumentValues = { instrument, setInstrument }

  return (
    <AppContext.Provider value={appValues}>
      <PingPongContext.Provider value={pingPongValues}>
        <FeedbackContext.Provider value={feedbackValues}>
          <CrusherContext.Provider value={crusherValues}>
            <InstrumentsContext.Provider value={instrumentValues}>
              <main className="App">
                <h1>VirtuoSynth</h1>
                <Sliders />
                <Instruments />
                <Keyboard />
              </main>
            </InstrumentsContext.Provider>
          </CrusherContext.Provider>
        </FeedbackContext.Provider>
      </PingPongContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
