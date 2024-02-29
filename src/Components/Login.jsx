import React, { useState } from 'react'
import { Link } from "react-router-dom";
//import { auth } from '../firebase';

function Login() {
    //const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history.push('/')
        //     })
        //     .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         // it successfully created a new user with email and password
        //         if (auth) {
        //             history.push('/')
        //         }
        //     })
        //     .catch(error => alert(error.message))
    }

    return (
        <>
            <div className='flex flex-col items-center h-screen '>
                <Link to='/'>
                    <img className='mt-5 mb-5 object-contain  w-24 mr-auto ml-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo' />
                </Link>

                <div className='w-75 h-fit flex flex-col rounded-md border border-solid border-black p-5'>
                    <h1 className='font-extrabold mb-5'>Sign In</h1>
                    <form>
                        <h5 className='mb-2'>E-mail</h5>
                        <input type='email' value={email} className='h-8 mb-2.5 bg-white w-9/12 border-black ' onChange={e => setEmail(e.target.value)} />

                        <h5 className='mb-2 '>Password</h5>
                        <input type='password' value={password} className='h-8 mb-2.5 bg-white w-9/12 border-black' onChange={e => setPassword(e.target.value)} />

                        <button type='submit' onClick={signIn} className='border border-solid bg-orange-400 border-black w-9/12 h-8 mt-2.5'>Sign In</button>
                    </form>
                    <p className='mt-4 text-xs'>
                        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='ml-28 border border-solid h-8 mt-2.5 w-9/12 bg-gray-500'>Create your Amazon Account</button>
                </div>

            </div>
        </>

    )
}

export default Login
