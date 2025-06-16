"use client"
import React, { useState , useLayoutEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import DashLeftMenu from '../components/DashLeftMenu';
import { AiOutlineDashboard } from "react-icons/ai";
import { PiUserCircleDashed } from "react-icons/pi";
import { BsCartDash } from "react-icons/bs";
import AmChart from '../components/AmChart';
import Image from 'next/image';
import { FaRegEye } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";




function Page() {
    const dashMainCard = [
        {
            dashCardLogo:
                <AiOutlineDashboard className='dashContentLogo' />,
            dashCount: 97342,
            content: [
                "Enrolled Courses",
            ]
        },
        {
            dashCardLogo:
                <PiUserCircleDashed className='dashContentLogo' />,
            dashCount: 343549,
            content: [
                "User Visite",
            ]
        },
        {
            dashCardLogo:
                <BsCartDash className='dashContentLogo' />,
            dashCount: 234323,
            content: [
                "Enrolled Courses",
            ]
        },
    ]

    const [activeTab, setActiveTab] = useState("Latest Post")

    return (
        <>
            <Navbar />
            <main className="float-start w-100 maind-body dashborad-bg120">
                <section className="dash-section crm-pages-dashborad01 float-start w-100 position-relative">
                    <div className="container">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-2">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </nav>

                        

                        <div className="row mt-3 gy-4 gx-lg-5">
                            <aside className='col-lg-3 dash-margin'>
                                <DashLeftMenu />
                            </aside>

                            <div className='col-lg-9 '>
                                <h2 className='dash mb-4'>Dashboard</h2>
                                <div className='row'>
                                        {dashMainCard.map((item, index) => (
                                            <div className="col-lg-4 mb-4" key={index}>
                                                <div className="cm-infos crm-box1 d-flex align-items-center w-100 bg-white">
                                                    <div className='dashContentLogo-div'>
                                                        {item.dashCardLogo}
                                                    </div>
                                                    <h5 className="card-title">+{item.dashCount}
                                                        <span className='d-block'>
                                                             {item.content[0]}
                                                        </span>
                                                    </h5>
                                                </div>
                                            </div>
                                        ))}

                                 <div className='col-lg-8 mb-4'>
                                    <div className='d-inline-block crm-box1 w-100'>
                                        <div className='d-flex border-bt pb-3 cmr-pading0152 mb-3 align-items-center w-100 justify-content-between'>
                                            <h4 className='mb-0'> Analytics </h4>
                                            <div className='col-4'>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>by this months</option>
                                                    <option value="1">Year</option>
                                                    <option value="2">Week</option>
                                                </select>
                                            </div>
                                        </div>
                                      <AmChart/>
                                    </div>
                                 </div>

                                 <div className='col-lg-4 mb-4'>
                                    <div className='crm-box1 border-bt w-100'>
                                        <div className='border-bt cmr-pading0152'>
                                            <h4> My Account </h4>
                                        </div>
                                        <div className='user-part150 w-100'>
                                            <figure className='mx-auto d-block'>
                                                <Image src="/card-1.webp" width={255} height={197} alt='sm'/>
                                            </figure>
                                            <div className='my-details01 text-center'>
                                                 <h5> James Danis </h5>
                                                <p> Creative blogger </p>

                                                <div className="col-9 mx-auto">
                                                    <Link href="/account" className='btn mb-3 w-100 eit-btn'>Update </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 
                                 <div className='col-lg-12'>
                                    <div className='crm-box1 w-100'>

                                        <div className='border-bt cmr-pading0152'>
                                            <h4> Recent Post </h4>
                                        </div>
                                        <div className='crm-post mt-3 tables-bg d-block mx-auto'>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Summary</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <Link href="/dashboard">
                                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                                                                </Link> 
                                                            </td>
                                                        <td> 
                                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </p>
                                                        </td>
                                                        <td>
                                                            <p> 16/06/2025 </p>
                                                        </td>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                 <button className='btn bt-videw'>
                                                                    <FaRegEye/>
                                                                 </button>
                                                                 <button className='btn btn-danger ms-2'>
                                                                        <AiOutlineDelete/>
                                                                 </button>
                                                            </div>
                                                            
                                                        </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <Link href="/dashboard">
                                                                    Contrary to popular belief.
                                                                </Link> 
                                                            </td>
                                                        <td> 
                                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </p>
                                                        </td>
                                                        <td>
                                                            <p> 16/06/2025 </p>
                                                        </td>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                 <button className='btn bt-videw'>
                                                                    <FaRegEye/>
                                                                 </button>
                                                                 <button className='btn btn-danger ms-2'>
                                                                        <AiOutlineDelete/>
                                                                 </button>
                                                            </div>
                                                            
                                                        </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <Link href="/dashboard">
                                                                    Contrary to popular belief, Lorem Ipsum.
                                                                </Link> 
                                                            </td>
                                                        <td> 
                                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                        </td>
                                                        <td>
                                                            <p> 16/06/2025 </p>
                                                        </td>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                 <button className='btn bt-videw'>
                                                                    <FaRegEye/>
                                                                 </button>
                                                                 <button className='btn btn-danger ms-2'>
                                                                        <AiOutlineDelete/>
                                                                 </button>
                                                            </div>
                                                            
                                                        </td>
                                                        </tr>

                                                    </tbody>
                                            </table>
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
