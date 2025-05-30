import React from 'react'
import Navbar from '../components/Navbar'
import BannerImage from '../components/BannerImage'



import iamNotRobot from '../assets/iam-not-robot.webp'
import Image from 'next/image'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
             <section className="about-section float-start w-100">
                    <div className="about-banner-section  position-relative float-start w-100">
                    
                        <h2 className=''>Contact Us</h2>
                        <figure>
                        <Image src="/prol01.png" width={1440} height={300} alt="logo" />
                        </figure>
                    </div>
             
              </section>

            <main className='float-start main-body w-100'>
                <section className="container-margin float-start w-100">
                    <div className=" aboutus-article">
                        <div className="container">

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=..."
                                        width="488"
                                        height="692"
                                    ></iframe>
                                </div>
                                <div className="col-lg-6">
                                    <form action="" method="" className='contact-right-form'>
                                        <h2 className='crm-heading'>Contact <span>Us</span></h2>
                                        <p>Have questions or need support? We&#39;re here to help! Use our Contact Us page to reach out to our team for technical assistance, partnership inquiries, or general information about our CMS. Whether you're a creator, journalist, or organization, we’re ready to support your journey in Nigeria’s digital media space.</p>
                                        <input type="text" className='contact-input' id='contact-fullname' placeholder='Enter Your Full Name:' />
                                        <div className='contact-eamil-phone'>
                                            <input type="text" className='contact-input contact-input-emailPh' id='contact-email' placeholder='Enter Your E-mail:' />
                                            <input type="text" className='contact-input contact-input-emailPh' id='contact-phonenumber' placeholder='Enter Your Contact:' />
                                        </div>
                                        <textarea name="" className='conatct-textarea' rows="5" cols="30" placeholder='Message:'></textarea>
                            <p>I am not a Robot</p>
                                        <button type="submit" className='btn conatct-sendmessage'>Send your Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer/>
           
        </>
    )
}

export default page
