import '../Banner/banner.css';
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Banner = () => {
  const email = "info@linkstar.com.np";
  const phoneNumber = "+97714957047";
  const whatsappNumber = '+9779851337276'

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <>
      <div className='bannerContainer global_flex'>
        <div className='bannerDetails'>
        {/* <img className='logo' src="/image/logopng.png" alt="iink star logo" /> */}
          {/* <p><FaMapMarkerAlt/>samakhusi,Kathmandu,Nepal</p> */}
          <div className='locationIcon'>
            <p className='email'><CiLocationOn/></p> 
            <p>Samakhusi,Kathmandu,Nepal</p>
          </div>
          <div onClick={handleEmailClick} className='locationIcon'>
            <p className='email'><TfiEmail/></p>
            <p>{email}</p>
          </div>

          <div onClick={handlePhoneClick} className='locationIcon'> 
            <p className='email'><MdOutlinePhoneInTalk/></p>
           
            <p>{phoneNumber}</p>
          </div>

        </div>
        <div className='bannerWhatsapp' onClick={handleWhatsAppClick}>
          <p><RiWhatsappFill className='whatsappIcon'/><span>{whatsappNumber}</span></p>
        </div>
      </div>
    </>
  );
};

export default Banner;
