import React, { useState, useEffect } from 'react';
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
  const [activeKey, setActiveKey] = useState("");
  const [playbackArray, setPlaybackArray] = useState([]);

  function playNote(note) {
    Tone.Destination.mute = false;

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    const feedbackDelay = new Tone.FeedbackDelay(0.125, parseFloat(feedbackVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const vol = new Tone.Volume(-12).toDestination();

    const synth = instrument === "DuoSynth" ?
      new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher).connect(vol)
      :
      new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher);

    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now);
  }

  function playLaptopKeys(e) {
    playNote(KEY_TO_NOTE[e.key]);
    setActiveKey(KEY_TO_NOTE[e.key]);
    setTimeout(() => {
      setActiveKey("");
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('keypress', playLaptopKeys);

    return function () {
      window.removeEventListener('keypress', playLaptopKeys);
    }
  });

  useEffect(() => {
    setPlaybackArray(playbackArray => [...playbackArray].concat(activeKey));
  }, [activeKey]);

  function stopSound() {
    Tone.Destination.mute = true;
  }

  /*
    useEffect(() => {
      if (navigator.requestMidiAccess) {
        navigator.requestMidiAccess().then(success, failure);
      } else {
        console.log('requestMidiAccess not found');
      }
    });
  
    function failure() {
      console.log('could not connect to MIDI');
    }
  
    function success(midiAccess) {
      console.log(midiAccess);
    }
    */

  const appValues = { activeKey, setActiveKey, playbackArray, setPlaybackArray, playNote, stopSound };
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
