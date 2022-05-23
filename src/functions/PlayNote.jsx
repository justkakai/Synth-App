import * as Tone from 'tone';


function playNote(note) {
    
    Tone.Destination.mute = false;

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    const feedbackDelay = new Tone.FeedbackDelay(0.125, parseFloat(feedbackVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const synth = new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher);

    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now); 
  }