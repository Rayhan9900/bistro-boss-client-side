import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HiAdjustmentsVertical, HiCalendar, HiHome, HiListBullet, HiShoppingCart } from "react-icons/hi2";
import { FaBook, FaUtensils } from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import useCart from '../hooks/useCart';
import { FaUsers } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin  value from the database

    const [isAdmin] = useAdmin()

    return (
        <div className='flex'>
            {/* Dashboard side bar*/}
            <div className="w-64 min-h-screen bg-orange-400">
                <ui className="menu p-3">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <HiHome />
                                    Admin Home </NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils />
                                    Add items </NavLink>

                            </li>

                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <HiListBullet />
                                    Manage Items</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings">
                                    <FaBook />
                                    Manage Bookings</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers />
                                    All Users</NavLink>

                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <HiHome />
                                        User Home </NavLink>

                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <HiCalendar />
                                        Not History </NavLink>

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
                                    <NavLink to="/dashboard/paymentHistory">
                                        <HiListBullet />
                                        Real Payment History</NavLink>

                                </li>
                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider divider-accent"></div>
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
            <div className='flex-1 p-8 '>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard