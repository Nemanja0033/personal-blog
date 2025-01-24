"use client"
import { createContext, ReactNode, useState } from "react";

export const IsHiddenContext = createContext<any>(undefined);

export const IsHiddenProvider = ({children}: {children: ReactNode}) => {
    const [isHidden, setIsHidden] = useState(false);
    
    const handleHide = () => {
        setIsHidden(!isHidden);
    }

    return(
        <IsHiddenContext.Provider value={{isHidden, handleHide}}>
            {children}
        </IsHiddenContext.Provider>
    )
}
