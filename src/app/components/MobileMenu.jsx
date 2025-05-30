import React from 'react'
import Link from 'next/link';
import Image from "next/image";

function MobileMenu() {
    return (
        <>
           <div className="offcanvas offcanvas-end mobile-menu-div" id="mobile-menu">
                <div className="offcanvas-header">
                    
                    <button type="button" className="close-menu" data-bs-dismiss="offcanvas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                    </button>
                </div>
  
      
                <div className="offcanvas-body">
                
                    <div className="head-contact">
                        <Link href="/" className="logo-side">
                           <Image loading="lazy" src="/logo1.svg" width={55} height={65} alt="logo"/>
                        </Link>
                        
                        <div className="mobile-menu-sec mt-5">
                            <ul className="list-unstyled">
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/"> Home</Link>
                            </li>

                            <li data-bs-dismiss="offcanvas">
                                <Link href="/about"> About </Link>
                            </li>

                            <li data-bs-dismiss="offcanvas">
                                <Link href="/features">Features</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/pricing">Pricing</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/contact">Support</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/login">Login</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/signup">Signup</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <Link href="/about" class="btn signup-btn"> Login / Register </Link>
                            </li>

                            </ul>
                        </div>
                        
                        
                    </div>
                </div>
    
 
           </div>
        </>
    )
}

export default MobileMenu;
