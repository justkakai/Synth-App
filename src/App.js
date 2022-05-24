import React from 'react';
import { ReverbProvider } from './contexts/ReverbContext';
import { PingPongProvider } from './contexts/PingPongContext';
import { ChebyshevProvider } from './contexts/ChebyshevContext';
import { CrusherProvider } from './contexts/CrusherContext';
import { InstrumentsProvider } from './contexts/InstrumentsContext';
import Sliders from './components/Sliders';
import Instruments from './components/Instruments';
import Keyboard from './components/Keyboard';
import './App.css';

function App() {

  return (
      <ReverbProvider>
        <PingPongProvider>
          <ChebyshevProvider>
            <CrusherProvider>
              <InstrumentsProvider>
                <main className="App">
                  <h1>VirtuoSynth</h1>
                  <Sliders />
                  <Instruments />
                  <Keyboard />
                </main>
              </InstrumentsProvider>
            </CrusherProvider>
          </ChebyshevProvider>
        </PingPongProvider>
      </ReverbProvider>
  );
}

export default App;
