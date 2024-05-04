import React, { createRef, useContext, useEffect, useState } from 'react'
import Result from './Result';
import ResultFullScreen from './ResultFullScreen';
import { StyleContext } from '../contexts/StyleContext';
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

function ResultsContainer({ results }) {

    const { style, changeStyle } = useContext(StyleContext)

    const [ index, setIndex ] = useState(1);
    const [ message, setMessage ] = useState('');
    const scrollRef = createRef();

    const handleNext = () => {
        if(index < results.length - 1) {
            setIndex(index + 1);
        } else {
            setMessage('no more pages');
            setTimeout(() => { setMessage('') }, 3000)
        }
    }

    useEffect(() => {
        scrollRef.current.scrollIntoView({ block: 'end', behavior:'smooth' });
    }, [index]);

    useEffect(() => {
        console.log(style)
        const handleSpace = (event) => {
            if(event.keyCode === 32) {
                handleNext();
            }
        }
        
        window.addEventListener('keydown', handleSpace)

        return () => window.removeEventListener('keydown', handleSpace)
    })

    return (
        <div className="w-full h-full relative pt-40" ref={scrollRef}>
            <button className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-800 text-white rounded-full p-2 px-4" onClick={() => changeStyle()}>
                Change View <HiOutlineSwitchHorizontal className='inline' />
            </button>
            {
            results.slice(0, index).map((result, index) =>(
                style === "fullscreen" ?
                    <ResultFullScreen
                        key={index}
                        keywords={result.keywords}
                        paragraph={result.paragraph}
                    /> :
                    <Result
                        key={index}
                        keywords={result.keywords}
                        paragraph={result.paragraph}
                    />
            ))
            }

            {
                message && (
                    <div className="fixed bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-75 font-medium bg-slate-900 text-white rounded-sm py-1 w-40 text-center">
                        {message}
                    </div>
                )
            }

            <div className="absolute top-0 left-0 w-full h-full" onClick={handleNext}></div>
        </div>
    )
}

export default ResultsContainer