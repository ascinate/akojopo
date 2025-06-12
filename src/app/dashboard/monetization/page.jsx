"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component


//chart npm install @amcharts/amcharts5
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";
import AmChart from '@/app/components/dashboard/Monetization/AmChart';

function Page() {
  const [activeTab, setActiveTab] = useState("Chart");
    const menuNavItems = [
    {
      name: "Chart",
      text: <AmChart/>,

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

  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100'>
              <h2 className='dash'>Monetization</h2>
              <select name="" id="" className='w-25 dash-select'>
                <option value="">option</option>
              </select>

            </div>
            <div className="row">
              <aside className='col-lg-3'>


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
