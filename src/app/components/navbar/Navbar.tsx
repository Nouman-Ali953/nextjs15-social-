import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24'>
            {/* Left */}
            <div className='text-blue-600 font-bold text-xl'>NEXT.js15Social</div>
            {/* center */}
            <div className='hidden'>center</div>
            {/* right */}
            <div className=''><MobileMenu /></div>
        </div>
    )
}

export default Navbar