import * as Tone from 'tone';

const playNote = (note) => {
    // console.log(new Tone());
    const delay = new Tone.FeedbackDelay(0.1, 0.9).toDestination();
    // const osc = new Tone.Oscillator().toDestination();
    // start at "C4"
    // osc.frequency.value = "C4";
    // ramp to "C2" over 2 seconds
    // osc.frequency.rampTo("E6", 5);
    // start the oscillator for 2 seconds
    // osc.start().stop("+3");
    const synth = new Tone.FMSynth().toDestination().connect(delay);
    const now = Tone.now();
    synth.triggerAttackRelease(note, "4n", now);
    // synth.connect(distortion);
    // synth.triggerAttackRelease(note, "8n");
    // new Tone.Loop(time => {
    //   synth.triggerAttackRelease([note, "D4", "F4", "C5"], "8n", time);
    // }).start("2n");
    // Tone.Transport.start()
    // Tone.Transport.bpm.rampTo(800, 5);
  }