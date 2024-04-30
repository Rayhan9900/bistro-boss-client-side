import { Link } from "react-router-dom"


// import navberImg from '../../../assets/others/authentication2.png'
import animation from '../../../assets/others/cupcake-dribbble.gif'
import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"

import { MdShoppingCart } from "react-icons/md";

function Navber() {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    const navOption = <>

        <li><Link className="text-pink-600 font-semibold hover:bg-yellow-400" to="/">Home</Link></li>
        <li><Link className="text-pink-600 font-semibold hover:bg-yellow-400" to="/menu">Our Menu</Link></li>
        <li><Link className="text-pink-600 font-semibold hover:bg-yellow-400" to="/order/salad">Order Food</Link></li>
        <li><Link className="text-pink-600 font-semibold hover:bg-yellow-400" to="/secret">Secret</Link></li>
        <li>
            <Link to="/">
                <button className="btn">
                    <MdShoppingCart className="mr-2" />
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>

        {
            user ? <>

                {/* <span className="text-pink-600">{user?.displayName}</span> */}

                <button onClick={handleLogOut} className="btn btn-ghost text-pink-600">LogOut</button>
            </>
                :
                <>
                    <li><Link className="text-pink-600  hover:bg-yellow-400" to="/login">Login</Link></li>
                </>
        }

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-purple-600 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOption}

                        </ul>
                    </div>
                    <div className="flex">
                        <img className="rounded-full w-10 h-10" src={animation} alt="" />
                        <a className="btn btn-ghost text-sky-400 font-Rubik text-2xl">Bistro Boss</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    )
}

export default Navber