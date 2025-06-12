"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import BottomCard from '@/app/components/dashboard/DashTabContent/BottomCard';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component





function Page() {


  const menuNavItems = [
    {
      name: "Latest Post",
      text: <BottomCard />,

    },
    {
      name: "profile",
      text: "profile",
    },
    {
      name: "Contact",
      text: "Contact",
    }
  ];

  const [activeTab, setActiveTab] = useState("Latest Post");

  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100 my-2'>
              <h2 className='dash'>Analytics</h2>

              <button className='px-2 dash-btn'>Start</button>

            </div>

            <div className="row">
              <aside className='col-lg-3 dash-margin'>
                <DashLeftMenu />
              </aside>

              <div className='col-lg-9 '>
                <ul className='nav dash-tabs d-flex justify-content-between gap-4 mx-2' id="myTab" role="tablist">
                  {menuNavItems.map((tab) => {
                    return (
                      <li key={tab.name}>
                        <button
                          onClick={() => setActiveTab(tab.name)}
                          className={`tab ${activeTab === tab.name ? 'active' : ''}`}
                        >
                          {tab.name}
                        </button>
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
