import { createContext, useState } from "react";

const CrusherContext = createContext(0);

function CrusherProvider({ children }) {

    const [bitCrusherVal, setBitCrusherVal] = useState("8")

    return (
        <CrusherContext.Provider value={{bitCrusherVal, setBitCrusherVal}}>
            {children}
        </CrusherContext.Provider>
    );
}

export { CrusherContext, CrusherProvider };