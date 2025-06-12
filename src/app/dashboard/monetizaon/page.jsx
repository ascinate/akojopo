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
    }

  ];

  const [activeTab, setActiveTab] = useState('')


  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100 my-2'>
              <h2 className='dash'>Monetizaon</h2>
              <div>
                <button>demo text</button>
                <button>demo text</button>
              </div>
            </div>
            <div className="row">
              <aside className='col-lg-3'>


                <DashLeftMenu />

              </aside>

              <div className='col-lg-9 '>





                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
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
