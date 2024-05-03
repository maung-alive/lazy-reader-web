import React, { createRef, useEffect, useState } from 'react'
import Result from './Result';

function ResultsContainer({ results }) {

    const [ index, setIndex ] = useState(1);
    const [ message, setMessage ] = useState('');
    const scrollRef = createRef();

    const handleNext = () => {
        if(index < results.length - 1) {
            setIndex(index + 1);
        } else {
            setMessage('no more pages');
            setTimeout(() => { setMessage('') }, 5000)
        }
    }

    useEffect(() => {
        scrollRef.current.scrollIntoView({ block: 'end', behavior:'smooth' });
    }, [index]);

    return (
        <div className="w-full h-full relative mt-40" ref={scrollRef}>
            {
                results.slice(0, index).map((result, index) => (
                    <Result
                        key={index}
                        image={result.image}
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