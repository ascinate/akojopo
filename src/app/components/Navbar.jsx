'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const mianmenu = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'About', href: '/about' },
        { id: 3, title: 'Features', href: '/features' },
        { id: 4, title: 'Pricing', href: '/pricing' },
        { id: 5, title: 'Blog', href: '/blog' },
    ];

    const mianright = [
        { id: 6, title: 'Support', href: '/support' },
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
                        <Image src='/logo1.svg' width={55} height={65} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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
export default Navbar;