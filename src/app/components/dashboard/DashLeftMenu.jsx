"use client"
import React, { useState } from 'react'
import Link from 'next/link';


// react icon
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { RiBloggerLine } from "react-icons/ri";
import { VscSortPrecedence } from "react-icons/vsc";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuUserRoundPlus } from "react-icons/lu";


function DashLeftMenu() {

    const [userToggle, setUserToggle] = useState(false);

    const handleUserToggle = () => {
        setUserToggle(!userToggle);
    }

    const menuItems = [
        { label: <Link href="/dashboard">Dashboard</Link>, icon: <MdOutlineSpaceDashboard /> },
        { label: <Link href="/dashboard/analytics">Analytics</Link>, icon: <RiDashboard3Line /> },
        { label: <Link href="/dashboard/monetizaon">Monetizaon</Link>, icon: <CiMoneyBill /> },
        { label: <Link href="/dashboard/monetization">Monetization</Link>, icon: <MdOutlineMonetizationOn /> },
        { label: <Link href="/dashboard/phoin">Phoin</Link>, icon: <MdOutlineMotionPhotosOn /> },
        { label: <Link href="/dashboard/prec">Prec</Link>, icon: <VscSortPrecedence /> },
        { label: <Link href="/dashboard/blog">Blog</Link>, icon: <RiBloggerLine /> },
        { label: <Link href="/dashboard/about">About</Link>, icon: <LuInfo /> },
        {
            icon: <FaRegUser />,
            label: <Link href="/dashboard/users" >Users
                <IoIosArrowDropdown onClick={handleUserToggle} className='DashLeftMenuUsersIcon' />
                {userToggle && (
                    <ul>
                        <li>
                            <Link href="/dashboard/users/dashboardlogin">
                                <MdOutlineLogin />
                                <span>Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/users/dashboardsignin">
                                <LuUserRoundPlus />
                                <span>Sign Up</span>
                            </Link>
                        </li>

                    </ul>
                )}
            </Link>,
        },
        { label: <Link href="/dashboard/settings">Settings</Link>, icon: <IoSettingsOutline /> },
    ];

    return (
        <>
            <ul className='dashboard-left-menu'>
                {menuItems.map((item, index) => (
                    <>
                        <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {item.icon}
                            {item.label}
                        </li>
                    </>

                ))}


            </ul>

        </>
    )
}

export default DashLeftMenu
