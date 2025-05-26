import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import loginImg from '../assets/loginImg.webp';
import Image from "next/image";
import Link from 'next/link';

function page() {
    return (
        <>
            <Navbar></Navbar>
            <section className="login-section">
                <article className="">
                    <div className="container">
                        <div className="card mb-3 login-card">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <figure>
                                        <Image src={loginImg} width={394} height={475} alt="logo" />
                                    </figure>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title login-card-title">Create account</h5>
                                        <form className='card-form'>
                                            <div className='login-input-margin'>
                                                <label htmlFor="#">Phone</label>
                                                <input type="text" className="form-control login-form-input " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>

                                            <div className='login-input-margin '>
                                                <label htmlFor="#">E-mail</label>
                                                <input type="text" className="form-control login-form-input  " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-input-margin '>
                                                <label htmlFor="#">Password</label>
                                                <input type="password" className="form-control login-form-input  " placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-btn-div login-input-margin'>
                                                <button className='login-btn'>Create Account</button>
                                            </div>
                                            <p className='text-center'> <span className='haveaccount'>Don&#39;t have an account ?</span> <Link href='/' className='signup'>Sign Up</Link></p>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>






            {/* <Footer></Footer> */}
        </>
    )
}

export default page
