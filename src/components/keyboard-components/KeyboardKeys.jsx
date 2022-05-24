import { useState, useEffect } from 'react';
import { notes, KEY_TO_NOTE } from '../../Notes';
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
  }, [activeKey]);

  return (
    <div className="keys-row">
      {notes.map(({ noteOctave, keysClasses }) => (
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