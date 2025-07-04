'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import loginImg from '../assets/loginImg.webp';
import Image from "next/image";
import Link from 'next/link';

function page() {
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    });
    const[error,setError]=useState(null)
    const[success,setSuccess]=useState(false)

     const handleChange = (e) =>{
    setFormData((prev) => ({
  ...prev,
  [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setSuccess(false);
  try{
   const res= await fetch('https://magical-friends-d2761de367.strapiapp.com/api/auth/local/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
      });

    const data = await res.json();
  if(!res.ok){
    throw new Error(data.error?.message || 'Something went wrong');
  }
  setSuccess(true);
  console.log('Registration successful:', data);
    setFormData({
      username: '',
     email: '',
     password: ''
  });
  }
 
  catch(err){
    setError(err.message);
  }
};

    return (
        <>
            <Navbar/>

             <main className='float-start w-100 signup-textpaf login-pages01'>
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
                                        <h5 className="card-title login-card-title">Create account</h5>
                                        <form className='card-form mt-3' onSubmit={handleSubmit} >
                                            <div className='login-input-margin'>
                                                <label className='mb-2' htmlFor="#">Username</label>
                                                <input type="text" className="form-control login-form-input " name="username"  value={formData.username} onChange={handleChange} placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>

                                            <div className='login-input-margin '>
                                                <label className='mb-2' htmlFor="#">E-mail</label>
                                                <input type="text" className="form-control login-form-input " name="email"  value={formData.email} onChange={handleChange} placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-input-margin '>
                                                <label className='mb-2' htmlFor="#">Password</label>
                                                <input type="password" className="form-control login-form-input" name="password"  value={formData.password} onChange={handleChange} placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                            <div className='login-btn-div login-input-margin'>
                                                <button type='submit' className='login-btn'>Create Account</button>
                                            </div>
                                            <div className='form-group text-center my-4'>
                                                 <p className='with-text position-relative'> <span className='bg-white px-3'> Or With </span> </p>
                                            </div>
                                            <div className='form-group text-center my-4'>
                                                 <button className='btn btn-gma'> <span className='img01'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                    </svg>  </span>  
                                                    Signup with Google </button>
                                            </div>
                                            {error && <p style={{ color: 'red' }}>{error}</p>}
                                            {success && <p style={{ color: 'green' }}>Registration successful!</p>}
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
