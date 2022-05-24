import * as Tone from 'tone';
import { BsPlay, BsVolumeMute } from "react-icons/bs";

function KeyboardDisplay({playbackArray}) {

    function stopSound() {
        Tone.Destination.mute = true;
        window.location.reload(); // quickfix
      }

    return (
        <div className="keyboard-display">
            <BsPlay className='react-icons play-button' />
            <div className="keys-played-display">
                {playbackArray.join("\xa0\xa0\xa0\xa0").replace(/b/g, '♭')}
            </div>
            <BsVolumeMute className='react-icons mute-button' onClick={stopSound} />
        </div>
    )
}

export default KeyboardDisplay;