import React from 'react'

function Result({ image, paragraph }) {
    return (
        <div className="w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mb-8 md:mb-0">

            <div className="w-full h-full flex items-center justify-center">
                <img src={image} alt="" className='image w-full md:aspect-[3/4] aspect-square md:w-72 lg:w-96' />
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-gray-900 px-4 lg:px-20">
                    {paragraph}
                </p>
            </div>

        </div>
    )
}

export default Result