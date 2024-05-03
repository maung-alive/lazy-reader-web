import React from 'react'

function Result() {
    return (
        <div className="w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mb-8 md:mb-0">

            <div className="w-full h-full flex items-center justify-center">
                <img src="https://picsum.photos/800" alt="" className='image w-full md:aspect-[3/4] aspect-square md:w-72 lg:w-96' />
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-gray-900 px-4 lg:px-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, culpa in aspernatur vitae consectetur eos reiciendis nisi quos quibusdam voluptate ad aliquid adipisci consequuntur expedita dolorum, sequi aut recusandae veritatis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quia in odit cum fugiat unde et libero possimus eius veniam. Vero itaque voluptas ad porro, commodi nihil iusto eveniet error.
                </p>
            </div>

        </div>
    )
}

export default Result