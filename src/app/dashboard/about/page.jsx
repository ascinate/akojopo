"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component


function Page() {


  const [activeTab, setActiveTab] = useState('')


  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <h2 className='dash'>About</h2>
            <div className="row">
              <aside className='col-lg-3'>
                <DashLeftMenu />
              </aside>
              <div className='col-lg-9 '>
                <div>
                  <h2>Mission</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nulla, dolor error placeat, voluptatum neque ut dolore beatae deserunt nemo ducimus ipsam qui commodi non maxime veritatis facilis quas consectetur.</p>
                </div>
                <div>
                  <h2>Founding Story</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nulla, dolor error placeat, voluptatum neque ut dolore beatae deserunt nemo ducimus ipsam qui commodi non maxime veritatis facilis quas consectetur.</p>
                </div>
                <div>
                  <h2>Wiry Akejppo</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nulla, dolor error placeat, voluptatum neque ut dolore beatae deserunt nemo ducimus ipsam qui commodi non maxime veritatis facilis quas consectetur.</p>
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
