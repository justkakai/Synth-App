function playNote(note) {
    Tone.Destination.mute = false;

    // Tone.context.lookAhead = 0;

    const pingPongDelay = new Tone.PingPongDelay("8n", parseFloat(pingPongVal)).toDestination();

    /*  const autoWah = new Tone.AutoWah(100, 2, -300).toDestination();
        autoWah.Q.value = 1;  */

    const feedbackDelay = new Tone.FeedbackDelay(0.125, parseFloat(feedbackVal)).toDestination();

    const bitCrusher = new Tone.BitCrusher(parseInt(bitCrusherVal)).toDestination();

    const vol = new Tone.Volume(-12).toDestination();
    // const oscillator = new Tone.Oscillator().connect(feedbackDelay).start();
    // instrument === "DuoSynth" ?
    const synth = instrument === "DuoSynth" ?
      new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher).connect(vol)
      :
      new Tone[instrument]().toDestination().connect(pingPongDelay).connect(feedbackDelay).connect(bitCrusher);

    /*
  console.log(synth.harmonicity.value);
  if (instrument === "DuoSynth") {
    synth.harmonicity.value = 2;
  } else {
    synth.harmonicity.value = 3;
  }
*/
    const now = Tone.now();
    synth.triggerAttackRelease(note, "8n", now);
    // synth.triggerAttack(note, now);
    // synth.triggerRelease(now +0.1);
  }