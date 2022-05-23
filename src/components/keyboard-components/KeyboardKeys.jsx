import { useContext } from 'react';
import { notes } from '../../Notes';
import AppContext from '../../contexts/AppContext';

function KeyboardKeys() {

    const { activeKey, setActiveKey, playNote } = useContext(AppContext);

    return (
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
    )
}

export default KeyboardKeys;