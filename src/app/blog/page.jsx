import React from 'react'
import Navbar from '../components/Navbar'
import BannerImage from '../components/BannerImage'
import Image from 'next/image'
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from '../components/Footer';

// image
import loginImg from '../assets/loginImg.webp';
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import blog4 from '../assets/blog4.webp'
import blog5 from '../assets/blog5.webp'
import blog6 from '../assets/blog6.webp'
import contributeImg1 from '../assets/contributeImg1.webp'
import contributeImg2 from '../assets/contributeImg2.webp'

function page() {
    return (
        <>
            <Navbar />
            <section className="about-section float-start w-100">
                <div className="about-banner-section  position-relative float-start w-100">
                    
                    <h2>Our Latest Blog</h2>
                    <figure>
                        <Image src="/blogs01-banner.jpg" width={1440} height={300} alt="logo" />
                    </figure>
                </div>
    
            
            </section>
            
            <main className='float-start w-100 main-body'>
                <section className="container-margin mb-0 float-start w-100">
                    <article className=" aboutus-article">
                        <div className="container">
                            <h2 className='latest-story-heading'>Our Latest <span className=''>Story</span></h2>
                        
                            <div className='row row-cols-1 row-cols-lg-3 gy-lg-4'>
                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog1} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">Local Language Publishing Insights</h5>
                                            <p className="card-text">Nigeria is rich in linguistic diversity. Learn how to effectively create and publish content in Hausa, Yoruba, Igbo, and Pidgin using our CMS.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog2} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">CMS Feature Highlights</h5>
                                            <p className="card-text">Stay updated on the latest features and tools available in our CMS. From editing updates and new integrations to performance improvements.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog3} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">Platform Updates & Feature Releases</h5>
                                            <p className="card-text">Stay updated with the latest tools, features, and improvements in our CMS. This section will keep you informed about new releases designed to make content creation easier.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog4} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">Staying Safe Online as a Publisher</h5>
                                            <p className="card-text">With increasing digital threats, it's essential to protect your content and audience. Read our expert advice on cybersecurity for Nigerian publishers.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog5} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">Digital Monetization Strategies in Nigeria</h5>
                                            <p className="card-text">From native advertising to mobile payments and subscriptions, we cover proven ways Nigerian content creators and publishers can earn revenue online.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card lateststory-card" >
                                        <figure>
                                            <Image src={blog6} width={360} height={236} alt="logo" />
                                        </figure>
                                        <div className="card-body lateststory-card-text">
                                            <h5 className="card-title">Journalism & Media Innovation</h5>
                                            <p className="card-text">Explore how journalists and media organizations in Nigeria are adapting to the digital age. We cover topics like investigative reporting.</p>
                                            <Link href='/' className='lateststory-card-readmore'>Read More <span><IoIosArrowRoundForward /></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                </section>

            
                <section className="float-start w-100">
                    <article className="aboutus-article">
                        <div className="container">
                             <h2 className='text-center crm-heading'>Want to <span className='colort01'>contribute?</span></h2>
                            
                            <div className='row row-cols-1 mt-5 row-cols-lg-2 align-items-center gx-lg-0'>
                                 <div className='col'>
                                      <figure className='m-0'>
                                         <Image src="/man.png" width={613} height={530} alt='nams'/>
                                      </figure>
                                 </div>
                                 <div className='col'>
                                     <article className='contribute-card'>
                                        <h3 className='mb-3'>Contribute Today</h3>
                                        <p>We&#39;re always excited to welcome fresh perspectives and original voices. If you have a unique story, insight, or idea that aligns with our mission, we’d love to hear from you! Simply fill out the form below to pitch your article or join our community of contributors. Let’s shape the future of Nigerian storytelling—together.</p>
                                        <button className='btn '>Doscover More</button>
                                     </article>
                                 </div>
                            </div>
                        

                        </div>
                    </article>
                </section>
            </main>

            <Footer/>

        </>
    )
}

export default page;
