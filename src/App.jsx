import React, { useState, useEffect } from 'react';
import { KEY_TO_NOTE } from './Notes';
import AppContext from './contexts/AppContext';
import ReverbContext from './contexts/ReverbContext';
import PingPongContext from './contexts/PingPongContext';
import ChebyshevContext from './contexts/ChebyshevContext';
import CrusherContext from './contexts/CrusherContext';
import InstrumentsContext from './contexts/InstrumentsContext';
import Sliders from './components/Sliders';
import Instruments from './components/Instruments';
import Keyboard from './components/Keyboard';
import './App.css';
import usePlay from './functions/PlayNote';

function App() {

  const { reverbVal, setReverbVal, pingPongVal, setPingPongVal, chebyshevVal, setChebyshevVal, bitCrusherVal, setBitCrusherVal, instrument, setInstrument, playNote } = usePlay();
  const [activeKey, setActiveKey] = useState("");
  const [playbackArray, setPlaybackArray] = useState([]);


  useEffect(() => {
    window.addEventListener('keypress', playLaptopKeys);

    return function () {
      window.removeEventListener('keypress', playLaptopKeys);
    }
  });

  useEffect(() => {
    if (activeKey !== "" && activeKey !== undefined) {
      setPlaybackArray(playbackArray => [...playbackArray].concat(activeKey));
    }
  }, [activeKey]);

  function playLaptopKeys(e) {
    playNote(KEY_TO_NOTE[e.key]);
    setActiveKey(KEY_TO_NOTE[e.key]);
    setTimeout(() => {
      setActiveKey("");
    }, 200)
  }

  function playSoundBack() {
    playbackArray.reduce(async (previousPromise, nextNote) => {
      await previousPromise
      return playNote(nextNote)
    }, Promise.resolve([]));

    console.log(playbackArray);
  }


  const appValues = { activeKey, setActiveKey, playbackArray, setPlaybackArray, playNote, playSoundBack };
  const reverbValues = { reverbVal, setReverbVal }
  const pingPongValues = { pingPongVal, setPingPongVal }
  const chebyshevValues = { chebyshevVal, setChebyshevVal }
  const crusherValues = { bitCrusherVal, setBitCrusherVal }
  const instrumentValues = { instrument, setInstrument }

  return (
    <AppContext.Provider value={appValues}>
      <ReverbContext.Provider value={reverbValues}>
        <PingPongContext.Provider value={pingPongValues}>
          <ChebyshevContext.Provider value={chebyshevValues}>
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
          </ChebyshevContext.Provider>
        </PingPongContext.Provider>
      </ReverbContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
