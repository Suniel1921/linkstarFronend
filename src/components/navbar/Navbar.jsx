

// *************dynamic code for demand page***************



import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../navbar/navbar.css';
import Banner from '../Banner/Banner';
import { BiMenuAltRight, BiX } from "react-icons/bi";
// import { TbMenuDeep } from "react-icons/tb";


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false); // State to handle menu visibility

 // Function to toggle menu visibility
 const toggleMenu = () => {
  setShowMenu(!showMenu);
};


  const openLicensePdf = () => {
    window.open('/image/LINK-STAR-LICENSE.pdf');
  };

 const openCompanyProfilePdf = ()=>{
  window.open('/image/Link-Star-Brochure.pdf', '_blank')
 }

  const ourCompanyMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/our-company/chairperson'>Words from Chairperson</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/our-company/managing-director'>Words from Managing Director</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/our-company/intl-marketing-director'>Words from Intl Marketing Director</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to='/our-company/marketing-officer'>Words from Marketing Officer</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to='/our-company/general-manager'>Words from General Manager</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink to='/our-company/BOD'>Words from BOD</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="7">
        <NavLink onClick={openLicensePdf}>View Company License</NavLink>
      </Menu.Item> */}
      <Menu.Item key="8">
        <NavLink onClick={openCompanyProfilePdf}>View Company Profile</NavLink>
      </Menu.Item>
    </Menu>
  );

  const procedureMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/procedure/why-nepalese'>Why Nepalese</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/procedure/how-its-work'>How Its Work</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/procedure/required-documents'>Required Documents</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='navbarContainer container'>
      <div className='banner'><Banner /></div>
      <hr />
      <div className='navbar global_flex'>
        <img className='logo' src="/image/logopng.png" alt="iink star logo" />
        {/* <ul className='navlinks'> */}
        <ul className={`navlinks ${showMenu ? 'show' : ''}`}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li>
            <Dropdown overlay={ourCompanyMenu}>
              <NavLink to='/our-company' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                Our Company <DownOutlined />
              </NavLink>
            </Dropdown>
          </li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/why-us'>Why Us?</NavLink></li>
          <li>
            <Dropdown overlay={procedureMenu}>
              <NavLink to='/procedure' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                Procedure <DownOutlined />
              </NavLink>
            </Dropdown>
          </li>
          <li><NavLink to='/demands'>Demands</NavLink></li>
       
          <li><Link to={'/'} onClick={openLicensePdf}>Legal Documents</Link></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
       
        </ul>
        {/* <div className='hambugerMenu'><TbMenuDeep/></div> */}
        {/* Hamburger Menu */}
        <p className='hambugerMenu' onClick={toggleMenu}>
            {showMenu ? <BiX /> : <BiMenuAltRight />}
          </p>
      </div>
    </div>
  );
}

export default Navbar;





// **************static code for demand page*************


// import { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import '../navbar/navbar.css';
// import Banner from '../Banner/Banner';
// import { BiMenuAltRight, BiX } from "react-icons/bi";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [navbarTop, setNavbarTop] = useState(53);
//   const [scrolled, setScrolled] = useState(false); // New state to track scroll

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 0;
//       setScrolled(scrolled); // Update scroll state
//       setNavbarTop(scrolled ? -15 : 53); // Adjust navbar position based on scroll
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const openLicensePdf = () => {
//     // window.open('/image/LINK-STAR-LICENSE.pdf');
//     window.open("/image/linkStar_License 2024.pdf")
//   };

//   const openCompanyProfilePdf = () => {
//     window.open('/image/Link-Star-Brochure.pdf', '_blank');
//   };

//   const ourCompanyMenu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to='/our-company/chairperson'>Words from Chairperson</NavLink>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to='/our-company/managing-director'>Words from Managing Director</NavLink>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <NavLink to='/our-company/intl-marketing-director'>Words from Intl Marketing Director</NavLink>
//       </Menu.Item>
//       <Menu.Item key="4">
//         <NavLink to='/our-company/marketing-officer'>Words from Marketing Officer</NavLink>
//       </Menu.Item>
//       <Menu.Item key="5">
//         <NavLink to='/our-company/general-manager'>Words from General Manager</NavLink>
//       </Menu.Item>
//       <Menu.Item key="6">
//         <NavLink to='/our-company/BOD'>Words from BOD</NavLink>
//       </Menu.Item>
//       <Menu.Item key="8">
//         <NavLink onClick={openCompanyProfilePdf}>View Company Profile</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   const procedureMenu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to='/procedure/why-nepalese'>Why Nepalese</NavLink>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to='/procedure/how-its-work'>How Its Work</NavLink>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <NavLink to='/procedure/required-documents'>Required Documents</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className={`navbarContainer ${scrolled ? 'scrolled' : ''}`}>
//       <div className='banner container'><Banner /></div>
//       <hr />
//       <div className='navbar global_flex' style={{ top: `${navbarTop}px` }}>
//         <img className='logo' src="/image/logopng.png" alt="iink star logo" />
//         <ul className={`navlinks ${showMenu ? 'show' : ''}`}>
//           <li><NavLink to='/'>Home</NavLink></li>
//           <li>
//             <Dropdown overlay={ourCompanyMenu}>
//               <NavLink to='/our-company' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
//                 Our Company <DownOutlined />
//               </NavLink>
//             </Dropdown>
//           </li>
//           <li><NavLink to='/about'>About</NavLink></li>
//           <li><NavLink to='/why-us'>Why Us?</NavLink></li>
//           <li><NavLink to='/our-business-partner'>Clients & Business Partner</NavLink></li>
//           <li>
//             <Dropdown overlay={procedureMenu}>
//               <NavLink to='/procedure' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
//                 Procedure <DownOutlined />
//               </NavLink>
//             </Dropdown>
//           </li>
//           <li><NavLink to='/demands'>Demands</NavLink></li>
//           <li><Link to={'/'} onClick={openLicensePdf}>Legal Documents</Link></li>
//           <li><NavLink to='/contact'>Contact</NavLink></li>
//           <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
//         </ul>
//         <p className='hambugerMenu' onClick={toggleMenu}>
//           {showMenu ? <BiX /> : <BiMenuAltRight />}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
