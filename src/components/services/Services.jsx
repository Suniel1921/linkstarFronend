

import React, { useState } from 'react';
import '../services/services.css';
import { SiConstruct3 } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { LuReplaceAll } from "react-icons/lu";
import { MdGppGood } from "react-icons/md";


const Services = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const image = e.target;
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setRotation(angle + 90); // Adding 90 degrees to make 0 degree point to the right
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  return (
    <div className='services_container global_margin_top'>
      <div className="container">
        <h3>Our Services</h3>
        <div className="services_content">
          <div className="left_service" data-aos="zoom-in">
            <div className="card">
              <div className="child_card">
                <p className='card_icons'><SiConstruct3/></p>
                <h3 className='cardHeading'>Professional & Instant Consultant</h3>
                <p>Experienced consultant providing immediate, expert solutions tailored to your needs, ensuring efficient and effective outcomes.</p>
              </div>
              <div className="child_card">
                <p className='card_icons'><TbCertificate/></p>
                <h3 className='cardHeading'>ISO Certified & License Company</h3>
                <p>Trusted company holding ISO certification and licensing, guaranteeing quality, reliability, and adherence to industry standards.</p>
              </div>
              <div className="child_card">
                <p className='card_icons'><LuReplaceAll/></p>
                <h3 className='cardHeading'>Our Earned Goodwill in Region</h3>
                <p>Our earned goodwill in the region reflects our commitment to excellence, integrity, and client satisfaction.</p>
              </div>
              <div className="child_card">
                <p className='card_icons'><MdGppGood/></p>
                <h3 className='cardHeading'>Leading Recruitment agency</h3>
                <p>Premier recruitment agency in Nepal, connecting top talent with leading organizations for mutual success and growth.</p>
              </div>
            </div>
          </div>
          <div className="right_service" data-aos="zoom-in-up">
            <img className='globalImg'
              src="/image/global.png"
              alt=""
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;


