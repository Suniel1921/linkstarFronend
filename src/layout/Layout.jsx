import React from 'react';
import '../layout/layout.css';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='layout_container'>
        <div className='navbarComponent'><Navbar/></div>
        {/* {Outlet} */}
        <div className='outlet'><Outlet/></div>
       <div className='footer_container'> <Footer/></div>

    </div>
      
    </>
  )
}

export default Layout
