import React from 'react'

const NavBarLink = ({ href, text }) => (
    <a href={href} className="group text-lg font-medium text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-white">
        {text}
        <div className="group-hover:w-full w-0 h-[3px] duration-150 bg-gray-600 dark:bg-gray-50 rounded-ee-full"></div>
    </a>
)

function NavBar() {
    return (
        <div className="navbar">
            <div className="text-3xl font-medium dark:text-white text-black">Lazy Reader</div>

            <p className="text-base text-gray-300">Read Lazily</p>
        </div>
    )
}

export default NavBar