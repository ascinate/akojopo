"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component






function Page() {



  const menuNavItems = [
    {
      name: "Home",
      text: <HomeCard />,

    },
    {
      name: "profile",
      text: "profile",
    },
    {
      name: "Contact",
      text: "Contact",
    },
    {
      name:
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle dash-blog-tab-dropdown" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
      ,
      text:
       "dropdown"
      ,
    },

  ];

  const [activeTab, setActiveTab] = useState('')


  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100'>
              <h2 className='dash'>Blog</h2>
              <input type="text" placeholder='@' className='w-75' />

            </div>
            <div className="row">
              <aside className='col-lg-3'>


                <DashLeftMenu />

              </aside>

              <div className='col-lg-9 '>
                <ul className='nav dash-tabs d-flex justify-content-between gap-4 mx-2' id="myTab" role="tablist">
                  {menuNavItems.map((tab) => {
                    return (
                      <li key={tab.name} onClick={() => setActiveTab(tab.name)} className={activeTab === tab.name ? 'tab active' : ''}>
                        {tab.name}
                      </li>
                    )
                  })}

                </ul>

                <div>
                  {menuNavItems.map((tab) =>
                    tab.name === activeTab ? <p key={tab.name}> {tab.text}</p>
                      : null)}
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
