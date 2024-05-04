import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Generator from './components/Generator'
import Results from './components/Result'
import Footer from './components/Footer'
import { StyleContextProvider } from './contexts/StyleContext'

function App() {
    return (
		<div className="w-full overflow-hidden">
            <StyleContextProvider>
                <NavBar />
                <Home />
                <Generator />
                <Footer />
            </StyleContextProvider>
        </div>
    )
}

export default App