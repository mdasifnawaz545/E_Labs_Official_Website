import {Outlet} from 'react-router-dom'
import Navbar from '../mainComponents/Navbar';
import Footer from '../mainComponents/Footer';
function Layout() {
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout;