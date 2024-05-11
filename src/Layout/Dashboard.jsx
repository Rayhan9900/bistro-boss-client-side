import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HiAdjustmentsVertical, HiCalendar, HiHome, HiListBullet, HiShoppingCart } from "react-icons/hi2";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import useCart from '../hooks/useCart';


const Dashboard = () => {

    const [cart] = useCart()

    return (
        <div className='flex'>
            {/* Dashboard side bar*/}
            <div className="w-64 min-h-screen bg-orange-400">
                <ui className="menu p-3">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <HiHome />
                            User Home </NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <HiCalendar />
                            Reservation </NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <HiShoppingCart />
                            My cart ({cart.length})</NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <HiAdjustmentsVertical />
                            Add a Review</NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <HiListBullet />
                            My Bookings</NavLink>

                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <HiHome />
                            Home </NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/menu">
                            <GiHamburgerMenu />
                            Menu </NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/shop">
                            <GiShoppingBag />
                            Shop </NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <MdEmail />
                            Contact</NavLink>

                    </li>
                </ui>
            </div>

            {/* Dashboard content */}
            <div className='flex-1 p-8 bg-slate-800'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard