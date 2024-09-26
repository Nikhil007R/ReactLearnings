import React from 'react'

const Navbar = () => {
    return (

        <nav className="container mx-auto flex justify-between items-center bg-slate-900 text-white py-3" >
            <div className="logo " >
               <span className='font-bold text-xl cursor-pointer text-white mx-9'>i-Task</span>
            </div>

            <ul className='flex gap-8 mx-9'>
                <li className='cursor-pointer text-xl  hover:text-slate-400 hover:underline duration-700 transition-all'>Home</li>
                <li className='cursor-pointer text-xl  hover:text-slate-400 hover:underline duration-700 transition-all'>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar