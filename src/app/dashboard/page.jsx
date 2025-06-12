"use client"
import React, { useState } from 'react'
//component
import Navbar from '../components/Navbar'
import HomeCard from '../components/dashboard/HomeCard';
import DashLeftMenu from '../components/dashboard/DashLeftMenu';





function Page() {

    
    const menuNavItems = [
        {
            name: "Latest Post",
            text: <HomeCard />,

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

    const [activeTab, setActiveTab] = useState("Latest Post")

    return (
        <>
            <Navbar />
            <main className="float-start w-100 maind-body">
                <section className="dash-section float-start w-100 position-relative">
                    <div className="container">
                        <h2 className='dash'>Dashboard</h2>

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
