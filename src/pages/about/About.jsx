import "../about/about.css";
import { GrWorkshop } from "react-icons/gr";
import { BsPassportFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiSolidBasketball } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="about_container global_margin_top">
        <div className="container">
          <div className="aboutContent">
            <div className="left_About" data-aos="fade-right">
              <img src="/image/hero.png" alt="" />
            </div>
            <div className="right_About" data-aos="fade-up-right">
            <h3>About Us</h3>
              <h3 className="heading">One Step To Your Future Starts Here</h3>
              <p style={{lineHeight: '22px'}}>
                Link Star Manpower Services Pvt. Ltd is a gateway between Nepalese workers and foreign emeployers. it was established on 25 September 2011. it is duly register by the Nepal Govt. License No. 1025/068/69. Its main purpose is to explore the competent expert human resource and make available in the international job market as per the requirements of the foreign employers.
              </p>

              <div className="aboutList">
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <GrWorkshop />
                    </span>
                  </p>
                  <div>
                    <h4>Nepals Global Talent Connector</h4>
                    {/* <p>para goes here</p> */}
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <BsPassportFill />
                    </span>
                  </p>
                  <div>
                    <h4>Your Passport to International Careers</h4>
                    {/* <p>para goes here</p> */}
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <AiOutlineGlobal />
                    </span>
                  </p>
                  <div>
                    <h4>Nepals Bridge to Global Employment</h4>
                    {/* <p>para goes here</p> */}
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <BiSolidBasketball />
                    </span>
                  </p>
                  <div>
                    <h4>Empowering Nepalese Talent Worldwide</h4>
                    {/* <p>para goes here</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
         <h3 style={{marginTop: '16px', marginBottom: '16px'}}>Govt. Lic. No.: 1025/068/069 Govt. Regd. No.: 7923/067/068 PAN: 304581045</h3>
          <p style={{lineHeight: ' 28px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LINK STAR MANPOWER SERVICES PVT. LTD. is a registered recruitment agency in Nepal supplying unskilled, semi-skilled and skilled manpower to various industries in Europe, Asia & Middle East. The main industries of focus include: Hospitality, Agriculture Transportation, Construction, Manufacturing, Security and Various Others. We are glad to introduce ourselves in the field of manpower recruiting companies in Nepal with enrich experience in the local and foreign markets. We are found to be most specific and reliable with its expert team and its vision to look after why foreign employment is so vital for todays generation. Our mission is to provide our clients and candidates with the excellent recruitment services based on mutual trust and the highest professional standards driven by quality and cost consciousness.</p>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default About;
