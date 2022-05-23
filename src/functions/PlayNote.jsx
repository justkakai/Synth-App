import { useState } from 'react';
import * as Tone from 'tone';

const usePlay = () => {

  const [reverbVal, setReverbVal] = useState("0");
  const [pingPongVal, setPingPongVal] = useState("0.5");
  const [chebyshevVal, setChebyshevVal] = useState("0");
  const [bitCrusherVal, setBitCrusherVal] = useState("8");
  const [instrument, setInstrument] = useState("Synth");

   function playNote(note) {

    Tone.Destination.mute = false;

    const reverb = new Tone.Reverb(parseFloat(reverbVal)).toDestination();

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    const chebyshev = new Tone.Chebyshev(parseInt(chebyshevVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const synth = new Tone[instrument]().toDestination().connect(reverb).connect(pingPongDelay).connect(chebyshev).connect(bitCrusher);

    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now);
  }

  return { reverbVal, setReverbVal, pingPongVal, setPingPongVal, chebyshevVal, setChebyshevVal, bitCrusherVal, setBitCrusherVal, instrument, setInstrument, playNote }
}

export default usePlay;



