
import { Link } from 'react-router-dom';
// import { FaHome } from 'react-icons/fa'; 
import '../admin/sideMenu.css'

const SideMenu = () => {
  return (
    <div className='sideMenu_container'>
      <div className="sideItems">
        <Link to={'/'} className='listItems'>
          {/* <FaHome /> */}
          <span>Home</span>
        </Link>

        <Link to={'/dashboard/admin/createVacency'} className='listItems'>
          {/* <FaHome /> */}
          <span>Add Vacency</span>
        </Link>

   
       
       
      </div>
    </div>
  );
};

export default SideMenu;
