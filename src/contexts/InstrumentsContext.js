import { createContext, useState } from "react";

const InstrumentsContext = createContext(0);

function InstrumentsProvider({ children }) {

    const [instrument, setInstrument] = useState("Synth")

    return (
        <InstrumentsContext.Provider value={{instrument, setInstrument}}>
            {children}
        </InstrumentsContext.Provider>
    );
}

export { InstrumentsContext, InstrumentsProvider };