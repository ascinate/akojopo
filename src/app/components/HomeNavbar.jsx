'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

function HomeNavbar() {
    const mianmenu = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'About', href: '/about' },
        { id: 3, title: 'Features', href: '/features' },
        { id: 4, title: 'Pricing', href: '/pricing' },
        { id: 5, title: 'Blog', href: '/blog' },
    ];

    const mianright = [
        { id: 6, title: 'Support', href: '/contactus' },
        { id: 7, title: 'Login', href: '/login' },
        { id: 8, title: 'Signup', href: '/signup' },
    ];
    const pathname = usePathname();
    return (

        
        <>
        <header className="float-start w-100">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container align-items-center">
                    <Link className="navbar-brand" href="/">
                        <Image src='/logo1.svg' width={75} height={88} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#mobile-menu" role="button" type="button">
                       <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            {mianmenu.map((page) => {
                                const isActive = pathname === page.href;

                                return (
                                    <li key={page.id}>
                                        <Link
                                            href={page.href}
                                            className={`nav-link ${isActive ? 'active' : ''}`}
                                        >
                                            {page.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="right-menus01">
                            <ul className="d-flex align-items-center m-0">
                               {mianright.map((page) => {
                                const isActive = pathname === page.href;

                                    return (
                                        <li key={page.id}>
                                            <Link
                                                href={page.href}
                                                className={`nav-link ${isActive ? 'active' : ''}`}
                                            >
                                                {page.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );

}
export default HomeNavbar;