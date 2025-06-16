
import DashLeftMenu from '../components/DashLeftMenu';
import Navbar from '@/app/components/Navbar';
import React from 'react';
import Link from 'next/link';

function Page() {



  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body dashborad-bg120">
        <section className="dash-section crm-pages-dashborad01 float-start w-100 position-relative">
          <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active">My Account</li>
                </ol>
            </nav>
            <div className="row mt-3 gy-4 gx-lg-5">
              <aside className='col-lg-3'>


                <DashLeftMenu />

              </aside>

              <div className='col-lg-9'>
                  <h2 className='dash'> My Account </h2>
                  <div className='d-inline-block crm-box1 w-100 p-4 mt-3'>
                      <div className='row gy-4'>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                              <label className='form-label'> First Name </label>
                              <input type='text' className='form-control'/>
                          </div>
                            
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                              <label className='form-label'> Last Name </label>
                              <input type='text' className='form-control'/>
                          </div>
                            
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                              <label className='form-label'> Email </label>
                              <input type='email' className='form-control'/>
                          </div>
                            
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                              <label className='form-label'> Phone Number </label>
                              <input type='text' className='form-control'/>
                          </div>
                            
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <label className='form-label'> User Type </label>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                          </div>
                            
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                              <label className='form-label'> City </label>
                              <input type='text' className='form-control'/>
                          </div>
                            
                        </div>
                        <div className='col-lg-6'>
                            <button type='submit' className='btn btn-sve'> Save Changes </button>
                        </div>

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
