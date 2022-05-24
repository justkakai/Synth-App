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

    // he output of the synth could be routed through one (or more) effects before going to the speakers

    // ( [decay] ) --> the amount of time it will reverberate for
    const reverb = new Tone.Reverb(parseFloat(reverbVal)).toDestination();

    // ( [delayTime]  , [feedback] ) --> the delay time between consecutive echos, he amount of the affected signal which is fed back through the delay
    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    // ( [order] ) --> the order of the chebyshev polynomial. normal range between 1-100
    const chebyshev = new Tone.Chebyshev(parseInt(chebyshevVal)).toDestination();

    // (bits) --> the number of bits to downsample the signal. range from 1 to 8
    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const synth = new Tone[instrument]().toDestination().connect(reverb).connect(pingPongDelay).connect(chebyshev).connect(bitCrusher); // create a synth and connect it to the main output (your speakers) with toDestination()

    const now = Tone.now();
    
    synth.triggerAttackRelease(note, "8n", now);
    
    // triggerAttack() starts the tone & triggerRelease() ends the tone. combining those to triggerAttackRelease() provides an immediate start and stop

    // 8n here refers to an eighth-note, which indicates its duration
  }

  return playNote;
}

export default usePlay;

