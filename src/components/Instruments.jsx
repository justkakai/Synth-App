import { useContext } from 'react';
import { notes } from '../Notes';
import AppContext from '../contexts/AppContext';
import '../styles/Instruments.css';

function Instruments() {

    const { instrument, setInstrument, playNote, stopSound } = useContext(AppContext);

    return (
        <section className="instruments-section">
            <div className="instruments-container">
                <button onClick={() => setInstrument("Synth")}>Synth</button>
                <button onClick={() => setInstrument("FMSynth")}>FMSynth</button>
                <button onClick={() => setInstrument("AMSynth")}>AMSynth</button>
                <button onClick={() => setInstrument("MetalSynth")}>MetalSynth</button>
                <button onClick={() => setInstrument("PluckSynth")}>PluckSynth</button>
            </div>
        </section>
    )
}

export default Instruments;