import { createContext, useState } from "react";

const ChebyshevContext = createContext(0);

function ChebyshevProvider({ children }) {

    const [chebyshevVal, setChebyshevVal] = useState("0")

    return (
        <ChebyshevContext.Provider value={{chebyshevVal, setChebyshevVal}}>
            {children}
        </ChebyshevContext.Provider>
    );
}

export { ChebyshevContext, ChebyshevProvider };