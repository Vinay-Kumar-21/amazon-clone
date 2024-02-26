import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='w-full bg-black'>
                <Link to="/login">
                    <img className="w-28 pt-4 mx-4" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
                </Link>

                <input type='text' />
            </nav>
        </>
    )
}

export default Header
