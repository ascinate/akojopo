import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';
import MobileMenu from './MobileMenu';



import Image from "next/image";

import footerlogo from '../assets/footerlogo.webp';

function Footer() {
    return (
        <>
        <footer className='foorte float-start w-100'>
            <div className='footer-back'>
                <div className="container">
                    <div className="foter-content">
                        <div className="row row-cols-1 row-cols-lg-4 gx-lg-5 gy-lg-0 gy-4">
                            <div className='col'>
                                <Link href="/"> <Image src={footerlogo} width={58} height={69} alt="logo" /> </Link>
                                <p className='mt-3'> The Nigerian digital media space is rapidly evolving, and there&#39;s a growing need for tools that truly understand the local context. </p>
                                <ul className='m-0 p-0 solick01'>
                                    <li className="footer-icon-text li-gap mt-3"><FaLocationDot /><span>2100 W Hubbard ST HPK409-2, Chicago, IL 60612</span></li>
                                    <li className="footer-icon-text li-gap mt-3"><IoMdCall /><span> 872-219-5662</span></li>
                                    <li className="footer-icon-text li-gap mt-3"><MdEmail /> <span>hello@inknaija.com</span></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <h3>Quick Links</h3>
                                <ul className='lisnk-ft m-0 p-0'>
                                    <li><span><Link href="/">Home</Link></span></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/features">Features</Link></li>
                                    <li><Link href="/ourpricing">Our Pricing</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <h3>Information </h3>
                                <ul className='lisnk-ft m-0 p-0'>

                                    <li><Link href="/">Contact Us</Link></li>
                                    <li><Link href="/about">Support</Link></li>
                                    <li><Link href="/features">Privacy & Polic</Link></li>
                                    <li><Link href="/ourpricing">Terms & Service</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <h3>Newsletter </h3>
                                <p className='mt-3'> Subscribe to our newsletter and stay ahead in Nigeria&#39;s digital media space. </p>
                                <ul className='lisnk-ft m-0 p-0'>
                                    <li className=" d-flex align-items-center">
                                        <input type="text" className="form-control footer-input" placeholder="Enter your E-mail..." />
                                        <button className="footer-send-btn">Send</button>
                                    </li>
                                </ul>
                                <div className='scolinms01' id="footer-icon-flex">
                                     <Link href='/' className='btn'> 
                                        <FaFacebookF />
                                     </Link>
                                     <Link href='/' className='btn'> 
                                        <FaInstagram />
                                     </Link>
                                     <Link href='/' className='btn'> 
                                       <FaXTwitter />
                                     </Link>
                                     <Link href='/' className='btn'> 
                                       <FaLinkedinIn />
                                     </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <hr className="" />
                <p className="text-center lower-footer">Copyright © 2025,inknaijaa</p>
            </div>

        </footer>

        <MobileMenu/>
        </>
    )
}

export default Footer
