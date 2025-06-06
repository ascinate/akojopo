import React from 'react'
import Navbar from '../components/Navbar'

// image
import checkmark from '../assets/check-mark.webp'
import Image from 'next/image'
import BannerImage from '../components/BannerImage'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <section className="about-section float-start w-100">
                <div className="about-banner-section position-relative float-start w-100">
                    <h2>Choose Your Plan</h2>
                    <figure>
                        <Image src="/mask-group.jpg" width={1440} height={300} alt="logo" />
                    </figure>
                </div>
            </section>

            <main className="float-start w-100 pricing-pages main-body">
                <section className="aboutus-article pricing-containter">
                    <h2 className="crm-heading">
                        Pick a plan that&#39;s <br /> right <span> for you</span>
                    </h2>
                    <div className="container table-pricings01">
                        <div className="row justify-content-center">
                            {/* Freemium Plan */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="pricing-content">
                                    <div className="pricing-row-main-badge">
                                        <p>Favorite</p>
                                    </div>
                                    <div className="pricing-row">
                                        <ul className="pricing-list-left">
                                            <li className="pricing-list-title-head">
                                              <span>Freemium</span> <span className="badge">Free</span>
                                            </li>
                                            <li className="pricing-list-price">
                                                $0 <small className="pricing-list-price-small"><suv>/mo</suv></small>
                                            </li>
                                            <li><button className="pricing-list-btn">Get Started</button></li>
                                        </ul>
                                        <ul className="pricing-list-right">
                                            {[
                                                "Local Language Support",
                                                "Built-In SEO for Nigerian Search Trends",
                                                "Editorial Tools for Journalists",
                                                "Social Media Integration",
                                                "Social Media Integration",
                                                "Social Media Integration"
                                            ].map((item, i) => (
                                                <li key={i} className="pricing-list-li">
                                                    <Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="pricing-content">
                                    <div className="pricing-row-main-badge">
                                        <p>Popular</p>
                                    </div>
                                    <div className="pricing-row">
                                        <ul className="pricing-list-left">
                                            <li className="pricing-list-title-head">
                                                <span>Premium</span> <span className="badge">20% off</span>
                                            </li>
                                            <li className="pricing-list-price">
                                                $65 <small className="pricing-list-price-small"><suv>/mo</suv></small>
                                            </li>
                                            <li><button className="pricing-list-btn">Get Started</button></li>
                                        </ul>
                                        <ul className="pricing-list-right">
                                            {[
                                                "Local Language Support",
                                                "Built-In SEO for Nigerian Search Trends",
                                                "Editorial Tools for Journalists",
                                                "Social Media Integration",
                                                "Social Media Integration",
                                                "Social Media Integration"
                                            ].map((item, i) => (
                                                <li key={i} className="pricing-list-li">
                                                    <Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="pricing-content">
                                    <div className="pricing-row-main-badge">
                                        <p>Popular</p>
                                    </div>
                                    <div className="pricing-row">
                                        <ul className="pricing-list-left">
                                            <li className="pricing-list-title-head">
                                                <span>Enterprise</span> <span className="badge">30% off</span>
                                            </li>
                                            <li className="pricing-list-price">
                                                $95 <small className="pricing-list-price-small"><suv>/mo</suv></small>
                                            </li>
                                            <li><button className="pricing-list-btn">Get Started</button></li>
                                        </ul>
                                        <ul className="pricing-list-right">
                                            {[
                                                "Local Language Support",
                                                "Built-In SEO for Nigerian Search Trends",
                                                "Editorial Tools for Journalists",
                                                "Social Media Integration",
                                                "Social Media Integration",
                                                "Social Media Integration"
                                            ].map((item, i) => (
                                                <li key={i} className="pricing-list-li">
                                                    <Image src={checkmark} alt="Checkmark" width={20} height={20} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default page;
