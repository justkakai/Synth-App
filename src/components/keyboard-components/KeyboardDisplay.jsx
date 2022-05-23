import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import { BsPlay, BsVolumeMute } from "react-icons/bs";

function KeyboardDisplay() {

    const { playbackArray, stopSound, playSoundBack } = useContext(AppContext);

    return (
        <div className="keyboard-display">
            <BsPlay style={{ fontSize: "3rem", color: "grey" }} onClick={playSoundBack} />
            <div className="keys-played-display">
                {playbackArray.join("\xa0\xa0\xa0\xa0").replace(/b/g, '♭')}
            </div>
            <BsVolumeMute style={{ fontSize: "3rem", color: "grey" }} onClick={stopSound} />
        </div>
    )
}

export default KeyboardDisplay;