import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import loginImg from '../assets/loginImg.webp';
import Image from "next/image";
import Link from 'next/link';

function page() {
    return (
        <>
            <Navbar/>

             <main className='float-start w-100 signup-textpaf login-pages01'>
                <section className="login-section">
                    
                        <div className="container">
                           
                            <div className="row row-cols-1 col-lg-9 mx-auto bg-white row-cols-lg-2 g-0">
                                <div className="col">
                                    <figure className='m-0'>
                                        <Image src={loginImg} width={394} height={475} alt="logo" />
                                    </figure>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title login-card-title">Create account</h5>
                                        <form className='card-form mt-3'>
                                            <div className='login-input-margin'>
                                                <label className='mb-2' htmlFor="#">Phone</label>
                                                <input type="text" className="form-control login-form-input " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>

                                            <div className='login-input-margin '>
                                                <label className='mb-2' htmlFor="#">E-mail</label>
                                                <input type="text" className="form-control login-form-input  " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-input-margin '>
                                                <label className='mb-2' htmlFor="#">Password</label>
                                                <input type="password" className="form-control login-form-input  " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-btn-div login-input-margin'>
                                                <button type='submit' className='login-btn'>Create Account</button>
                                            </div>
                                            <p className='text-center'> <span className='haveaccount'>Do you have an account ?</span> <Link href='/login' className='signup'>Login</Link></p>
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
