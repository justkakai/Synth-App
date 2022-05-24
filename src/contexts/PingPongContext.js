import { createContext, useState } from "react";

const PingPongContext = createContext(0);

function PingPongProvider({ children }) {

    const [pingPongVal, setPingPongVal] = useState("0.5")

    return (
        <PingPongContext.Provider value={{pingPongVal, setPingPongVal}}>
            {children}
        </PingPongContext.Provider>
    );
}

export { PingPongContext, PingPongProvider };