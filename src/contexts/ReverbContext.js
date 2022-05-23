import { createContext } from "react";

const ReverbContext = createContext(null);

export default ReverbContext;

/*
import { createContext, useState } from "react";

const ReverbContext = createContext(null);

function ReverbProvider({ children }) {

    const [reverbVal, setReverbVal] = useState("0")

    return (
        <ReverbContext.Provider value={{reverbVal, setReverbVal}}>
            {children}
        </ReverbContext.Provider>
    );
}

export { ReverbContext, ReverbProvider };
*/