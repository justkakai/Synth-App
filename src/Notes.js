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
    { note: "C", noteOctave: "C3", keysClasses: "white-key piano-key" },
    { note: "Db", noteOctave: "Db3", keysClasses: "black-key piano-key" },
    { note: "D", noteOctave: "D3", keysClasses: "white-key piano-key" },
    { note: "Eb", noteOctave: "Eb3", keysClasses: "black-key piano-key" },
    { note: "E", noteOctave: "E3", keysClasses: "white-key piano-key" },
    { note: "F", noteOctave: "F3", keysClasses: "white-key piano-key" },
    { note: "Gb", noteOctave: "Gb3", keysClasses: "black-key piano-key" },
    { note: "G", noteOctave: "G3", keysClasses: "white-key piano-key" },
    { note: "Ab", noteOctave: "Ab3", keysClasses: "black-key piano-key" },
    { note: "A", noteOctave: "A3", keysClasses: "white-key piano-key" },
    { note: "Bb", noteOctave: "Bb3", keysClasses: "black-key piano-key" },
    { note: "B", noteOctave: "B3", keysClasses: "white-key piano-key" },
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
    { note: "Eb", noteOctave: "Eb5", keysClasses: "black-key piano-key" },
    { note: "E", noteOctave: "E5", keysClasses: "white-key piano-key" }
]

const KEY_TO_NOTE = {
    y: "C3",
    s: "Db3",
    x: "D3",
    d: "Eb3",
    c: "E3",
    v: "F3",
    g: "Gb3",
    b: "G3",
    h: "Ab3",
    n: "A3",
    j: "Bb3",
    m: "B3",
    q: "C4",
    2: "Db4",
    w: "D4",
    3: "Eb4",
    e: "E4",
    r: "F4",
    5: "Gb4",
    t: "G4",
    6: "Ab4",
    z: "A4",
    7: "Bb4",
    u: "B4",
    i: "C5",
    9: "Db5",
    o: "D5",
    0: "Eb5",
    p: "E5"
}

/*
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
*/

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

export { notes, KEY_TO_NOTE };