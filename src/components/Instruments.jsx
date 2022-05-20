import { useContext } from 'react';
import { notes } from '../Notes';
import AppContext from '../contexts/AppContext';
import '../styles/Instruments.css';

function Instruments() {

    const { instrument, setInstrument, playNote, stopSound } = useContext(AppContext);

    const instrumentsArray = ["Synth", "FMSynth", "AMSynth", "MetalSynth", "PluckSynth"]

    return (
        <section className="instruments-section">
            <div className="instruments-container">
                {instrumentsArray.map((instrumentType) => (
                    <button onClick={() => setInstrument(instrumentType)} style={instrument === instrumentType ? { color: "rgb(0,0,0)", background: "rgb(221, 221, 221)" } : { color: "rgb(221, 221, 221)", background: "rgba(255, 255, 255, 0.2)" }}>{instrumentType}</button>
                ))}
            </div>
        </section>
    )
}

export default Instruments;