import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import Navber from "../Pages/Shared/Navber/Navber"

function Main() {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') ||
        location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    )
}

export default Main