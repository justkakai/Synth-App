import KeyboardDisplay from './keyboard-components/KeyboardDisplay';
import KeyboardKeys from './keyboard-components/KeyboardKeys';
import '../styles/Keyboard.css';

function Keyboard() {

  return (
    <section className="keyboard">
      <KeyboardDisplay />
      <KeyboardKeys />
    </section>
  )
}

export default Keyboard;