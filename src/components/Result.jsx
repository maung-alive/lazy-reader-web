import React, { useEffect, useState } from 'react'

function Result({ keywords, paragraph }) {
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ image, setImage ] = useState({})

    const handleStep = (index) => {
        setImageIndex(index)
    }

    useEffect(() => {
        setImage({
            src: keywords[imageIndex].image_url,
            alt: keywords[imageIndex].keyword
        })
    }, [imageIndex])

    return (
        <div className="w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mb-8 md:mb-0">

            <div className="w-full h-full flex items-center justify-center">
                <img
                    src={image.src}
                    alt={image.alt}
                    className='image w-full aspect-[4/3] md:aspect-[3/4] md:w-72 lg:w-96'
                />
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center">

                <p className="text-center text-gray-900 px-4 lg:px-20 mb-10">
                    {paragraph}
                </p>

                <div className="flex gap-x-2 z-[100]">
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

export default Result