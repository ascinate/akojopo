import React from 'react'
import Navbar from '../components/Navbar'


//image
import features1 from '../assets/features1.webp'
import features2 from '../assets/features2.webp'
import features3 from '../assets/features3.webp'
import features4 from '../assets/features4.webp'
import Image from 'next/image'
import Footer from '../components/Footer'



function page() {
    return (
        <>
            <Navbar />
            <section className="about-section float-start w-100">
                    <div className="about-banner-section  position-relative float-start w-100">
                    
                        <h2>Our Features</h2>
                        <figure>
                        <Image src="/prol01.png" width={1440} height={300} alt="logo" />
                        </figure>
                    </div>

                
                </section>
            <main className='float-start w-100'>
                <section className="fetures-div01-pages w-100 d-inline-block">
                    <div className=" aboutus-article features-container">
                        <h2>Our Features & <span>Services</span></h2>
                        <div className="container">
                            {/* card row */}
                            <div className='row row-margin'>
                                {/* card col */}
                                <div className='col-lg-6'>
                                    <div className='features-row-one-img'>
                                        <div className='features-stamp'>
                                            <p>Our Story</p>
                                            <h3>Something Know About Us !</h3>
                                        </div>
                                        <Image
                                            src={features1}
                                            alt="My Logo"
                                            width={457}
                                            height={337}
                                            id='features-stamp-img' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='features-row-one-card'>
                                        <h3>Built for Nigeria&#39;s Digital Landscape</h3>
                                        <p>Nigeria is home to diverse languages and cultures. Our CMS supports Yoruba, Hausa, Igbo, and Pidgin interfaces—helping creators publish content that resonates with their communities and promotes inclusivity.</p>
                                        <button className='btn'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* card row */}
                            <div className='row row-margin'>
                                {/* card col */}
                                <div className='col-lg-6'>
                                      <div className='features-row-one-card'>
                                        <h3>Built for Nigeria&#39;s Digital Landscape</h3>
                                        <p>Nigeria is home to diverse languages and cultures. Our CMS supports Yoruba, Hausa, Igbo, and Pidgin interfaces—helping creators publish content that resonates with their communities and promotes inclusivity.</p>
                                        <button className='btn'>Learn More</button>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                  
                                    <div className='features-row-one-img'>
                                        <div className='features-stamp'>
                                            <p>Our Story</p>
                                            <h3>Easy Content Creation & Management !</h3>
                                        </div>
                                        <Image
                                            src={features2}
                                            alt="My Logo"
                                            width={457}
                                            height={337}
                                            id='features-stamp-img' />
                                    </div>
                                </div>
                            </div>

                            {/* card row */}
                            <div className='row row-margin'>
                                {/* card col */}
                                <div className='col-lg-6'>
                                    <div className='features-row-one-img'>
                                        <div className='features-stamp'>
                                            <p>Our Story</p>
                                            <h3>Monetization Made Simple</h3>
                                        </div>
                                        <Image
                                            src={features3}
                                            alt="My Logo"
                                            width={457}
                                            height={337}
                                            id='features-stamp-img' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='features-row-one-card'>
                                        <h3>Built for Nigeria&#39;s Digital Landscape</h3>
                                        <p>Nigeria is home to diverse languages and cultures. Our CMS supports Yoruba, Hausa, Igbo, and Pidgin interfaces—helping creators publish content that resonates with their communities and promotes inclusivity.</p>
                                        <button className='btn'>Learn More</button>
                                    </div>
                                </div>
                            </div>

                            {/* card row */}
                            <div className='row row-margin mb-0'>
                                {/* card col */}
                                <div className='col-lg-6'>
                                      <div className='features-row-one-card'>
                                        <h3>Built for Nigeria&#39;s Digital Landscape</h3>
                                        <p>Nigeria is home to diverse languages and cultures. Our CMS supports Yoruba, Hausa, Igbo, and Pidgin interfaces—helping creators publish content that resonates with their communities and promotes inclusivity.</p>
                                        <button className='btn'>Learn More</button>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                  
                                    <div className='features-row-one-img'>
                                        <div className='features-stamp'>
                                            <p>Our Story</p>
                                            <h3>Multilingual & Culturally Relevant</h3>
                                        </div>
                                        <Image
                                            src={features4}
                                            alt="My Logo"
                                            width={457}
                                            height={337}
                                            id='features-stamp-img' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>


            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default page
