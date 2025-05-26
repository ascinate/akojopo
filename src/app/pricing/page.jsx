import React from 'react'
import Navbar from '../components/Navbar'


//image
import checkmark from '../assets/check-mark.webp'
import Image from 'next/image'
import BannerImage from '../components/BannerImage'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <BannerImage/>
            <main>
                <section className="container-margin">
                    <div className=" aboutus-article pricing-containter">
                        <h2>Pick a plan that&#39;s <br /> right <span>for you</span></h2>
                        <div className="container">
                            {/* row */}
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='pricing-content'>
                                        {/* row */}

                                        <div className='pricing-row-main-badge' id='pricing-row-main-badge'>
                                            <p>Favorite</p>
                                        </div>
                                        <div className='pricing-row'>

                                            <ul className='pricing-list-left'>
                                                <li className='pricing-list-title-head'><span id='pricing-list-title'>Freemium</span> <span className='badge'>Free</span></li>
                                                <li className='pricing-list-price'>$0 <small className='pricing-list-price-small'><suv>/mo</suv></small></li>
                                                <li><button className='pricing-list-btn'>Get Started</button></li>
                                            </ul>
                                            <ul className='pricing-list-right'>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Local Language Support</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Built-In SEO for Nigerian Search Trends</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Editorial Tools for Journalists</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                         {/* row */}
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='pricing-content'>
                                        {/* row */}

                                        <div className='pricing-row-main-badge' id='pricing-row-main-badge'>
                                            <p>Popular</p>
                                        </div>
                                        <div className='pricing-row'>

                                            <ul className='pricing-list-left'>
                                                <li className='pricing-list-title-head'><span id='pricing-list-title'>Premium</span> <span className='badge'>20% off</span></li>
                                                <li className='pricing-list-price'>$65 <small className='pricing-list-price-small'><suv>/mo</suv></small></li>
                                                <li><button className='pricing-list-btn'>Get Started</button></li>
                                            </ul>
                                            <ul className='pricing-list-right'>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Local Language Support</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Built-In SEO for Nigerian Search Trends</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Editorial Tools for Journalists</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* row */}
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='pricing-content'>
                                        {/* row */}

                                        <div className='pricing-row-main-badge' id='pricing-row-main-badge'>
                                            <p>Popular</p>
                                        </div>
                                        <div className='pricing-row'>

                                            <ul className='pricing-list-left'>
                                                <li className='pricing-list-title-head'><span id='pricing-list-title'>Enterprise</span> <span className='badge'>30% off</span></li>
                                                <li className='pricing-list-price'>$95 <small className='pricing-list-price-small'><suv>/mo</suv></small></li>
                                                <li><button className='pricing-list-btn'>Get Started</button></li>
                                            </ul>
                                            <ul className='pricing-list-right'>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Local Language Support</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Built-In SEO for Nigerian Search Trends</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Editorial Tools for Journalists</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                                <li className='pricing-list-li'><Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    Social Media Integration</li>
                                            </ul>
                                        </div>
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
