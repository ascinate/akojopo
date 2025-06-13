'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { VscSortPrecedence } from "react-icons/vsc";
import { MdOutlineSpaceDashboard , MdOutlineMonetizationOn ,MdOutlineMotionPhotosOn , MdLogout } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { CiMoneyBill } from "react-icons/ci";

function DashLeftMenu() {
    const mianmenu = [
        { id: 1, title: 'Dashboard', href: '/', icon: <MdOutlineSpaceDashboard /> },
        { id: 2, title: 'Analytics', href: '/analytics', icon: <RiDashboard3Line /> },
        { id: 3, title: 'Monetizaon', href: '/monetizaon', icon: <CiMoneyBill /> },
        { id: 4, title: 'Membership', href: '/membership', icon: <MdOutlineMonetizationOn /> },
        { id: 5, title: 'Trending', href: '/trending', icon: <MdOutlineMotionPhotosOn /> },
        { id: 6, title: 'User', href: '/user', icon: <VscSortPrecedence /> },
        { id: 7, title: 'Settings', href: '/settings', icon: <VscSortPrecedence /> },
    ];

    
    const pathname = usePathname();
    return (

        
        <>
        <aside className="float-start w-100 bg-white sideb-menus01">
            <div className="menu-sidebars-admins float-start w-100">
                <ul className="list-nav mx-auto mb-lg-0">
                    {mianmenu.map((page) => {
                        const isActive = pathname === page.href;

                        return (
                            <li key={page.id}>
                                <Link
                                    href={page.href}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                   <span>{page.icon}</span> {page.title}
                                </Link>
                            </li>
                        );
                    })}

                </ul>
                <div className="btn-grous01-div">
                     <button className="btn btn-groups01"> <MdLogout/> Logout </button>
                </div>
            </div>
        </aside>
        </>
    );

}
export default DashLeftMenu;
