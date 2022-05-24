import { createContext, useState } from "react";

const ReverbContext = createContext(0);

function ReverbProvider({ children }) {

    const [reverbVal, setReverbVal] = useState("0")

    return (
        <ReverbContext.Provider value={{ reverbVal, setReverbVal }}>
            {children}
        </ReverbContext.Provider>
    );
}

export { ReverbContext, ReverbProvider };