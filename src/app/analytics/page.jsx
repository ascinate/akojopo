"use client"
import DashLeftMenu from '@/app/components/DashLeftMenu';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
import AmChartcn from '../components/AmChartcn';
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
                    <li className="breadcrumb-item active">Analytics</li>
                </ol>
             </nav>
            <div className="row mt-3 gy-4 gx-lg-5">
              <aside className='col-lg-3 dash-margin'>
                <DashLeftMenu />
              </aside>

              <div className='col-lg-9'>
                     <h2 className='dash'>Analytics</h2>
                     <div className='crm-box1 p-4 w-100 mt-4'>
                         <AmChartcn/>
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
