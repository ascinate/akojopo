"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component






function Page() {

const cardData = [
        {
            title: "Card 1",
            subtitle: "Subtitle 1",
            content: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
                "Fuga reprehenderit minus veniam sequi veritatis..."
            ]
        },
        {
            title: "Card 2",
            subtitle: "Subtitle 2",
            content: [
                "Another card content goes here...",
                "More text inside the second paragraph..."
            ]
        }
    ];


  const [activeTab, setActiveTab] = useState('')

  const [prec, setPrec] = useState("")


  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100 my-2'>
              <h2 className='dash'>Prec</h2>
              <input type="text" placeholder='text' value={prec} onChange={(e) => setPrec(e.target.value)} />
            </div>

            <div className="row">
              <aside className='col-lg-3'>


                <DashLeftMenu />

              </aside>

              <div className='col-lg-9 '>
                <div className='d-flex justify-content-between'>
                  <div className=''>
                    <select name="" id="" className='mx-2'>
                      <option value="">option</option>
                    </select>
                    <select name="" id="" className='mx-2'>
                      <option value="">option</option>
                    </select>
                    <select name="" id="" className='mx-2'>
                      <option value="">option</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="">
                      <option value="">option</option>
                    </select>
                  </div>
                </div>
                <div className="container">
                {cardData.map((card, index) => (
                    <div className="card dashboard-card-style" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                            {card.content.map((para, i) => (
                                <p className="card-text" key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
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
