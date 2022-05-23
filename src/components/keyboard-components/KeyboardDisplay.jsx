import { useContext } from 'react';
import * as Tone from 'tone';
import AppContext from '../../contexts/AppContext';
import { BsPlay, BsVolumeMute } from "react-icons/bs";

function KeyboardDisplay() {

    const { playbackArray, playSoundBack } = useContext(AppContext);

    function stopSound() {
        Tone.Destination.mute = true;
      }

    return (
        <div className="keyboard-display">
            <BsPlay className='react-icons play-button' onClick={playSoundBack} />
            <div className="keys-played-display">
                {playbackArray.join("\xa0\xa0\xa0\xa0").replace(/b/g, '♭')}
            </div>
            <BsVolumeMute className='react-icons mute-button' onClick={stopSound} />
        </div>
    )
}

export default KeyboardDisplay;