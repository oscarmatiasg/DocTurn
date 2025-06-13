import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppProvider = (props)=> {
    const value = {doctors}
    return (
        <AppContext.Provider value={value}>
         {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
