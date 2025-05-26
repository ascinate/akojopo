import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';



import Image from "next/image";

import footerlogo from '../assets/footerlogo.webp';

function Footer() {
    return (
        <footer className='foorte'>
            <div className='footer-back'>
                <div className="container">
                    <div className="foter-content">
                        <div className="row">
                            <div className='col-lg-3'>
                                <ul>
                                    <li>     <Image src={footerlogo} width={58} height={69} alt="logo" /></li>
                                    <li className="li-gap">The Nigerian digital media space is rapidly evolving, and there&#39;s a growing need for tools that truly understand the local context.</li>
                                    <li className="footer-icon-text li-gap"><FaLocationDot /><span>2100 W Hubbard ST HPK409-2, Chicago, IL 60612</span></li>
                                    <li className="footer-icon-text li-gap"><IoMdCall /><span> 872-219-5662</span></li>
                                    <li className="footer-icon-text li-gap"><MdEmail /> <span>hello@inknaija.com</span></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <ul>
                                    <li><h3>Quick Links<hr className="hr" /></h3></li>
                                    <li><span><Link href="/">Home</Link></span></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/features">Features</Link></li>
                                    <li><Link href="/ourpricing">Our Pricing</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <ul>
                                    <li><h3>Information <hr className="hr" /></h3></li>

                                    <li><Link href="/">Contact Us</Link></li>
                                    <li><Link href="/about">Support</Link></li>
                                    <li><Link href="/features">Privacy & Polic</Link></li>
                                    <li><Link href="/ourpricing">Terms & Service</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <ul>
                                    <li><h3>Newsletter <hr className="hr" /></h3></li>
                                    <li className="li-gap">Subscribe to our newsletter and stay ahead in Nigeria&#39;s digital media space.</li>
                                    <li className="">
                                        <input type="text" placeholder="Enter your E-mail..." className="footer-input" />
                                        <button className="footer-send-btn">Send</button>
                                    </li>
                                    <li id="footer-icon-flex">
                                        <FaFacebookF />
                                        <FaInstagram />
                                        <FaXTwitter />
                                        <FaLinkedinIn />
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <hr className="" />
                <p className="text-center lower-footer">Copyright © 2025,inknaijaa&#45;Powered by Shopify</p>
            </div>

        </footer>
    )
}

export default Footer
