import React, { createContext, useEffect, useState } from 'react'

export const StyleContext = createContext()

export const StyleContextProvider = ({ children }) => {
    const [ style, setStyle ] = useState(localStorage.style || 'clean')

    const changeStyle = () => {
        setStyle(style === 'clean'? 'fullscreen' : 'clean')
    }

    useEffect(() => {
        localStorage.setItem('style', style);
    }, [style])

    return (
        <StyleContext.Provider value={{ style, changeStyle }}>
            {children}
        </StyleContext.Provider>
    )
}