import { useContext } from 'react';
import { ReverbContext } from '../contexts/ReverbContext';
import { PingPongContext } from '../contexts/PingPongContext';
import { ChebyshevContext } from '../contexts/ChebyshevContext';
import { CrusherContext } from '../contexts/CrusherContext';
import { InstrumentsContext } from '../contexts/InstrumentsContext';
import * as Tone from 'tone';

const usePlay = () => {

  const { reverbVal } = useContext(ReverbContext);
  const { pingPongVal } = useContext(PingPongContext);
  const { chebyshevVal } = useContext(ChebyshevContext);
  const { bitCrusherVal } = useContext(CrusherContext);
  const { instrument } = useContext(InstrumentsContext);

  
  function playNote(note) {

    Tone.Destination.mute = false;

    const reverb = new Tone.Reverb(parseFloat(reverbVal)).toDestination();

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    const chebyshev = new Tone.Chebyshev(parseInt(chebyshevVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const synth = new Tone[instrument]().toDestination().connect(reverb).connect(pingPongDelay).connect(chebyshev).connect(bitCrusher);

    const now = Tone.now();
    
    console.log("noteValue", note);
    synth.triggerAttackRelease(note, "8n", now);
  }

  return playNote;
}

export default usePlay;

