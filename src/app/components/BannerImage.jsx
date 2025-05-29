import React from 'react'
import Image from "next/image";



import aboutBackground from '../assets/about-page-banner.webp';


function BannerImage() {
    return (
        <>
            <div className="about-banner-section container-margin position-relative float-start w-100">
               
                    <h2 className='text-center'>About Us</h2>
                
                    <figure>
                        <Image src={aboutBackground} width={1440} height={300} alt="logo" />
                    </figure>
            </div>
        </>
    )
}

export default BannerImage
