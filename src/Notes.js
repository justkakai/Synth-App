/*
const playC4 = () => {
    --> create a synth and connect it to the main output (your speakers)
    --> new Tone.Synth() declares a new instrument “synth” (synthesizer, a keyboard)
    --> toDestination() sends the tone to the user’s speakers
    const synth = new Tone.Synth().toDestination();

    --> triggerAttack() starts the tone & triggerRelease() ends the tone;
    --> combining those to triggerAttackRelease() provides an immediate start and stop
    --> the parameters are the note (“C4”) and duration (“8n”) respectively --> 8n here refers to an eighth-note, which indicates its duration
    synth.triggerAttackRelease("C4", "8n");
}
*/

const notes = [
    { note: "C", noteOctave: "C4", keysClasses: "white-key piano-key" },
    { note: "Db", noteOctave: "Db4", keysClasses: "black-key piano-key" },
    { note: "D", noteOctave: "D4", keysClasses: "white-key piano-key" },
    { note: "Eb", noteOctave: "Eb4", keysClasses: "black-key piano-key" },
    { note: "E", noteOctave: "E4", keysClasses: "white-key piano-key" },
    { note: "F", noteOctave: "F4", keysClasses: "white-key piano-key" },
    { note: "Gb", noteOctave: "Gb4", keysClasses: "black-key piano-key" },
    { note: "G", noteOctave: "G4", keysClasses: "white-key piano-key" },
    { note: "Ab", noteOctave: "Ab4", keysClasses: "black-key piano-key" },
    { note: "A", noteOctave: "A4", keysClasses: "white-key piano-key" },
    { note: "Bb", noteOctave: "Bb4", keysClasses: "black-key piano-key" },
    { note: "B", noteOctave: "B4", keysClasses: "white-key piano-key" },
    { note: "C", noteOctave: "C5", keysClasses: "white-key piano-key" },
    { note: "Db", noteOctave: "Db5", keysClasses: "black-key piano-key" },
    { note: "D", noteOctave: "D5", keysClasses: "white-key piano-key" },
]

const KEY_TO_NOTE = {
    a: "C4",
    w: "Db4",
    s: "D4",
    e: "Eb4",
    d: "E4",
    f: "F4",
    t: "Gb4",
    g: "G4",
    z: "Ab4",
    h: "A4",
    u: "Bb4",
    j: "B4",
    k: "C5",
    o: "Db5",
    l: "D5"
}

const NOTE_TO_KEY = {
    C4: "a",
    Db4: "w",
    D4: "s",
    Eb4: "e",
    E4: "d",
    F4: "f",
    Gb4: "t",
    G4: "g",
    Ab4: "z",
    A4: "h",
    Bb4: "u",
    B4: "j",
    C5: "k",
    Db5: "o",
    D5: "l"
}

/*
const notes = [
    { note: "D", noteOctave: "D4", keysClasses: "white-key" },
    { note: "E", noteOctave: "E4", keysClasses: "white-key" },
    { note: "F", noteOctave: "F4", keysClasses: "white-key" },
    { note: "G", noteOctave: "G4", keysClasses: "white-key" },
    { note: "A", noteOctave: "A4", keysClasses: "white-key" },
    { note: "B♭", noteOctave: "Bb4", keysClasses: "black-key" },
    { note: "C", noteOctave: "C5", keysClasses: "white-key" },
    { note: "D", noteOctave: "D5", keysClasses: "white-key" },
]
*/

export { notes, KEY_TO_NOTE, NOTE_TO_KEY };