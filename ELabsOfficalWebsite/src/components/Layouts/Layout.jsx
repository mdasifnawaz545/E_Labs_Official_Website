import {Outlet} from 'react-router-dom'
import Navbar from '../mainComponents/Navbar';
import Footer from '../mainComponents/Footer';
function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            {/* <Footer/> */}
        </>
    )
}

export default Layout;