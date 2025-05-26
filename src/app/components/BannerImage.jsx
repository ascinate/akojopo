import React from 'react'
import Image from "next/image";



import aboutBackground from '../assets/about-page-banner.webp';


function BannerImage() {
    return (
        <>
            <div className="about-banner-section container-margin">
                <div className="about-heading">
                    <h2>About Us</h2>
                </div>
                <div>
                    <figure>
                        <Image src={aboutBackground} width={1440} height={300} alt="logo" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default BannerImage
