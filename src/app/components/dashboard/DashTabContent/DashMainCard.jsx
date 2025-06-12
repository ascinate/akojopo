import React from 'react'

//icon
import { AiOutlineDashboard } from "react-icons/ai";
import { PiUserCircleDashed } from "react-icons/pi";
import { BsCartDash } from "react-icons/bs";


function DashMainCard() {



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
                "Enrolled Courses",
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
    return (
        <>

            <div className="container mb-4">
                <div className="row">
                    {dashMainCard.map((item, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="card dash-card-style">
                                <div className="card-body dashMainCard">
                                    <div className='dashContentLogo-div'>
                                        {item.dashCardLogo}
                                    </div>
                                    <h5 className="card-title">{item.dashCount}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted dashMainCard-text">
                                        {item.content[0]}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container">
                <div className="row">
                    {dashMainCard.map((item, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="card dash-card-style">
                                <div className="card-body dashMainCard">
                                    <div className='dashContentLogo-div'>
                                        {item.dashCardLogo}

                                    </div>
                                    <h5 className="card-title">{item.dashCount}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted dashMainCard-text">
                                        {item.content[0]}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DashMainCard
