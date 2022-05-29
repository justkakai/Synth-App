import { useContext } from 'react';
import { InstrumentsContext } from '../contexts/InstrumentsContext';
import '../styles/Instruments.css';

function Instruments() {

    const { instrument, setInstrument } = useContext(InstrumentsContext);

    const instrumentsArray = ["Synth", "FMSynth", "AMSynth", "MonoSynth", "DuoSynth"]

    return (
        <section className="instruments-section">
            <div className="instruments-container">
                {instrumentsArray.map((instrumentType) => (
                    <button
                        key={instrumentType}
                        onClick={() => setInstrument(instrumentType)}
                        style={instrument === instrumentType ?
                            { color: "var(--instruments-button-text-color-active)", background: "var(--instruments-button-bg-color-active)" }
                            :
                            { color: "var(--instruments-button-text-color)", background: "var(--instruments-button-bg-color)" }}>
                        {instrumentType}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Instruments;