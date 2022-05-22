import { useContext } from 'react';
import { notes } from '../Notes';
import AppContext from '../contexts/AppContext';
import '../styles/Keyboard.css';

function Keyboard() {

  const { activeKey, setActiveKey, playbackArray, playNote } = useContext(AppContext);

  return (
    <section className="keyboard">
      <div className="keyboard-display">
        <div className="keys-played-display">{playbackArray.join("\xa0\xa0").replace(/b/g, '♭')}</div>
      </div>
      <div className="keys-row">
        {notes.map(({ note, noteOctave, keysClasses }) => (
          <button
            style={
              activeKey === noteOctave ?
                keysClasses === "white-key piano-key" ? { backgroundColor: "var(--white-key-active-color)", top: "0.4rem" } : { backgroundColor: "var(--black-key-active-color)", marginTop: "0.4rem" }
                :
                keysClasses === "white-key piano-key" ? { backgroundColor: "var(--white-key-color)" } : { backgroundColor: "var(--black-key-color)" }}
            className={keysClasses} onMouseDown={() => { playNote(noteOctave); setActiveKey(noteOctave); setTimeout(() => { setActiveKey(""); }, 200) }}></button>
        ))}
      </div>
      {/* <button onClick={stopSound}>stop sound!</button> */}
    </section>
  )
}

export default Keyboard;