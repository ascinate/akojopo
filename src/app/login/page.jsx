'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import loginImg from '../assets/loginImg.webp';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function page() {
     const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    identifier,
                    password
                })
            });

            const data = await res.json();

            if (res.ok) {
                
                localStorage.setItem('token', data.jwt);
                localStorage.setItem('user', JSON.stringify(data.user));
                router.push('/');
            } else {
                setError(data.error?.message || 'Login failed');
            }
        } catch (err) {
            setError('Something went wrong');
        }
    };
    return (
        <>
            <Navbar/>
            <main className='float-start w-100 login-pages01'>
                <section className="login-section">
                    
                        <div className="container">
                           
                            <div className="row row-cols-1 col-lg-9 mx-auto bg-white row-cols-lg-2 g-0">
                                <div className="col">
                                    <figure className='m-0'>
                                        <Image src='/loginImg.webp' width={394} height={475} alt="logo" />
                                    </figure>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title login-card-title">Sign in</h5>
                                        <form className='card-form mt-3' onSubmit={handleLogin}>
                                            {error && <div className="text-danger mb-2">{error}</div>}
                                            <div className='login-input-margin'>
                                                <label className='mb-2' htmlFor="#">User Id / E-mail</label>
                                                <input type="text" className="form-control login-form-input " value={identifier}
                                                onChange={(e) => setIdentifier(e.target.value)} placeholder="" />
                                            </div>

                                            <div className='login-input-margin '>
                                                <label className='mb-2' htmlFor="#">Password</label>
                                                <input type="password" className="form-control login-form-input" value={password}
                                                onChange={(e) => setPassword(e.target.value)} placeholder=""/>
                                                <Link href='/' className='forgetpassword login-input-margin mt-3'>Forget Password?</Link>
                                            </div>
                                            <div className='login-btn-div login-input-margin'>
                                                <button type='submit' className='login-btn'> Login in </button>
                                            </div>
                                            <p className='text-center'> <span className='haveaccount'>Don&#39;t have an account ?</span> <Link href='/signup'>Sign Up</Link></p>
                                        </form>

                                    </div>
                                </div>
                            </div>
                           
                        </div>
                </section>
            </main>


        </>
    )
}

export default page
