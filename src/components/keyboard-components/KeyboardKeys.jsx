import { useState, useEffect } from 'react';
import { NOTES, KEY_TO_NOTE } from '../../notesData';
import usePlay from '../../custom-hooks/usePlay';

function KeyboardKeys({playbackArray, setPlaybackArray}) {

  const [activeKey, setActiveKey] = useState("");
  const playNote = usePlay();

  useEffect(() => {
    window.addEventListener('keypress', playLaptopKeys);

    return function () {
      window.removeEventListener('keypress', playLaptopKeys);
    }
  });

  function playLaptopKeys(e) {
    playNote(KEY_TO_NOTE[e.key]);
    setActiveKey(KEY_TO_NOTE[e.key]);
    setTimeout(() => {
      setActiveKey("");
    }, 200)
  }

  useEffect(() => {
    if (activeKey !== "" && activeKey !== undefined) {
      setPlaybackArray(() => [...playbackArray].concat(activeKey));
    }
    // eslint-disable-next-line 
  }, [activeKey]);

  return (
    <div className="keys-row">
      {NOTES.map(({ noteOctave, keysClasses }) => (
        <button
        key={noteOctave}
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