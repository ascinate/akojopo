"use client"
import Link from 'next/link';
import React, { useState } from 'react'

//component
import Navbar from '@/app/components/Navbar'
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu'

function Page() {
  // const handleLogin = () => {
  //   console.log("hello");
  // };


const [userEmail,setUserEmail] = useState("");
const [userPasswoard, setUserPasswoard] = useState("");

  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <h2 className='dash'>User</h2>
            <div className="row">
              <aside className='col-lg-3'>
                <DashLeftMenu />
              </aside>
              <div className='col-lg-9 '>
                <div className="container dashlogin-containter">
                  <div className="card-body">
                    <h5 className="card-title login-card-title">Login in</h5>
                    <form className='card-form mt-3' >
                      <div className="text-danger mb-2"></div>
                      <div className='login-input-margin'>
                        <label className='mb-2' htmlFor="#">User Id / E-mail</label>
                        <input type="text" className="form-control login-form-input "
                          placeholder=""  value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                      </div>
                      <div className='login-input-margin '>
                        <label className='mb-2' htmlFor="#">Password</label>
                        <input type="password" className="form-control login-form-input"
                          placeholder="" value={userPasswoard} onChange={(e)=>setUserPasswoard(e.target.value)} />
                        <Link href='/' className='forgetpassword login-input-margin mt-3'>Forget Password?</Link>
                      </div>
                      <div className='login-btn-div login-input-margin'>
                        <button type='submit' className='login-btn' > Login in </button>
                      </div>
                      <p className='text-center'> <span className='haveaccount'>Don&#39;t have an account ?</span> <Link href='/dashboard/users/dashboardlogin'>Sign Up</Link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}
export default Page
