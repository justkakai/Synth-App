import { useState } from 'react';
import KeyboardDisplay from './keyboard-components/KeyboardDisplay';
import KeyboardKeys from './keyboard-components/KeyboardKeys';
import '../styles/Keyboard.css';

function Keyboard() {

  const [playbackArray, setPlaybackArray] = useState([]);

  return (
    <section className="keyboard">
      <KeyboardDisplay playbackArray={playbackArray}/>
      <KeyboardKeys playbackArray={playbackArray} setPlaybackArray={setPlaybackArray} />
    </section>
  )
}

export default Keyboard;