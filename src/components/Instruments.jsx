import { useContext } from 'react';
import { InstrumentsContext } from '../contexts/InstrumentsContext';
import '../styles/Instruments.css';

function Instruments() {

    const { instrument, setInstrument } = useContext(InstrumentsContext);

    const instrumentsArray = ["Synth", "FMSynth", "AMSynth", "MetalSynth", "DuoSynth"]

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