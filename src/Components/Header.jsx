import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='flex w-full bg-black items-center sticky top-0 z-100'>
                <Link to="/">
                    <img className="w-28 pt-4 mx-4 object-contain" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
                </Link>

                <div className='flex flex-1'>
                    <input className='py-1 border-none size-full' type='text' />
                    <div className='px-2 cursor-pointer bg-orange-400 bg-auto'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>

                {/* links */}
                <div className='flex justify-evenly'>

                    {/* 1st link */}
                    <Link to='/login' className='text-white no-underline'>
                        <div className='flex flex-col mx-2.5'>
                            <span className='text-xs'>Hello Vk</span>
                            <span className='text-sm font-extrabold'>Sign In</span>
                        </div>
                    </Link>

                    {/* 2nd link */}
                    <Link to='/' className='text-white no-underline'>
                        <div className='flex flex-col mx-2.5'>
                            <span className='text-xs'>Returns</span>
                            <span className='text-sm font-extrabold'>& Orders</span>
                        </div>
                    </Link>

                    {/* 3rd link */}
                    <Link to='/' className='text-white no-underline'>
                        <div className='flex flex-col mx-2.5'>
                            <span className='text-xs'>Your</span>
                            <span className='text-sm font-extrabold'>Prime</span>
                        </div>
                    </Link>

                    {/* 4th link */}
                    <Link to="/checkout" className='text-white no-underline'>
                        <div className='flex'>
                            <i class="fa-solid fa-basket-shopping"></i>
                            <span className='mx-2.5'>0</span>
                        </div>
                    </Link>
                </div>


            </nav>
        </>
    )
}

export default Header
