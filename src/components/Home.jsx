import React from 'react'
import Stars from './Stars'

function Home() {
    return (
        <div className="home overflow-hidden">
            <div className="w-full justify-center items-center hidden md:flex">
                <p className="text-3xl font-medium text-black dark:text-white">Lazy Reader</p>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <p className="md:hidden text-3xl font-medium text-black dark:text-white">Lazy Reader</p>
                <p className="text-center mt-4 leading-9 text-gray-800 dark:text-gray-200">
                    Read Anything You Want with Pictures
                </p>

                <button className="btn mt-6 px-10 text-base py-2">
                    Let's Start
                </button>
            </div>

            <Stars />
        </div>
    )
}

export default Home