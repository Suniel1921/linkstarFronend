
import SideMenu from './SideMenu'
import CreateVacency from './CreateVacency'
import '../admin/adminDashboard.css';
import ContactData from './ContactData';

const AdminDashboard = () => {
  return (
   <>
     <div className='sideMenuContainer'>
     <div className='sidemenu'><SideMenu/></div>
     <div className='contacDataContainer'>
     <div className='sidemenu'><CreateVacency/></div>
     <div className='sidemenu'><ContactData/></div>
     </div>
  

     </div>
   </>
  )
}

export default AdminDashboard