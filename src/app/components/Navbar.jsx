'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user:", error);
            }
        }
    }, []);

    const mianmenu = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'About', href: '/about' },
        { id: 3, title: 'Features', href: '/features' },
        { id: 4, title: 'Membership', href: '/membership' },
        { id: 5, title: 'Trending', href: '/trending' },
    ];

    return (
        <header className="float-start w-100">
            <nav className="navbar navbar-expand-lg bg-white navbar-light">
                <div className="container align-items-center">
                    <Link className="navbar-brand" href="/">
                        <Image src='/logo1.svg' width={75} height={88} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#mobile-menu" type="button">
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
                                {user ? (
                                    <>
                                        <li className="nav-link">
                                            {user.username || user.email}
                                        </li>
                                       
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href="/login"
                                                className={`nav-link ${pathname === '/login' ? 'active' : ''}`}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/signup"
                                                className={`nav-link ${pathname === '/signup' ? 'active' : ''}`}
                                            >
                                                Signup
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
