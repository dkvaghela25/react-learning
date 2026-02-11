import { createContext, use, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
    
    const bio = {
        myName: "Divyang Vaghela",
        myAge: 20
    }

    return (
        <BioContext.Provider value={bio}>{children}</BioContext.Provider>
    )

}

export const useBioContext = () => {
    const context = use(BioContext);
    if(context === undefined) throw new Error("Component must be in side BioProvider")
    return context;
}