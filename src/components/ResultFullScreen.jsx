import React, { useEffect, useState } from 'react'

function ResultFullScreen({ keywords, paragraph }) {
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ image, setImage ] = useState({})

    const handleStep = (index) => {
        setImageIndex(index)
    }

    useEffect(() => {
        setImage({
            src: keywords[imageIndex].largeImageURL,
            alt: keywords[imageIndex].keyword
        })
    }, [imageIndex])

    return (
        <div className="w-screen h-screen overflow-hidden relative">
                <img
                    src={image.src}
                    alt={image.alt}
                    className='image w-full h-full'
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-4 bg-white/20 backdrop-blur-sm z-50">
                    <p className="text-center text-black px-4 lg:px-20 mb-10">
                        {paragraph}
                    </p>

                    <div className="flex items-center justify-center gap-x-2">
                        {
                            keywords.map((i, index) => (
                                <span className={`cursor-pointer bg-slate-800 text-white ${ index == imageIndex ? "" : "opacity-70 hover:opacity-100"} px-2 py-0.5 rounded-md`} onClick={() => handleStep(index)}>
                                    {i.keyword}
                                </span>
                                ))
                            }
                    </div>
                </div>

        </div>
    )
}

export default ResultFullScreen