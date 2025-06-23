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
        { id: 1, title: 'Dashboard', href: '/dashboard', icon: <MdOutlineSpaceDashboard /> },
        { id: 2, title: 'Analytics', href: '/analytics', icon: <RiDashboard3Line /> },
        { id: 5, title: 'Trending', href: '/blog', icon: <MdOutlineMotionPhotosOn /> },
        { id: 6, title: 'My Account', href: '/myaccount', icon: <VscSortPrecedence /> },
    ];
  const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/login");
    };
    
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
                                   <span className="arow-cions">{page.icon}</span> <span className="titels01"> {page.title} </span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
                <div className="btn-grous01-div">
                     <button className="btn btn-groups01" onClick={handleLogout}> <MdLogout/> Logout </button>
                </div>
            </div>
        </aside>
        </>
    );

}
export default DashLeftMenu;
