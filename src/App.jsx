import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Generator from './components/Generator'
import Results from './components/Result'
import Footer from './components/Footer'

function App() {
    return (
		<div className="w-full overflow-hidden">
            <NavBar />
			<Home />
			<Generator />
            <Footer />
        </div>
    )
}

export default App