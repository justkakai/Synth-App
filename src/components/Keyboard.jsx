import { useContext } from 'react';
import { notes } from '../Notes';
import AppContext from '../contexts/AppContext';
import '../styles/Keyboard.css';

function Keyboard() {

    const {playNote, stopSound} = useContext(AppContext);

    return (
        <section className="keyboard">
          <div className="keys-row">
            {notes.map(({ note, noteOctave, keysClasses }) => (
              <button className={keysClasses} onClick={() => playNote(noteOctave)}></button>
            ))}
          </div>
          {/* <button onClick={stopSound}>stop sound!</button> */}
        </section>
    )
}

export default Keyboard;