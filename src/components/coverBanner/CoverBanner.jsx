import React from 'react';
import '../coverBanner/coverBanner.css';
import { useNavigate } from 'react-router-dom';

const CoverBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact'); // Navigate to '/contact' when the button is clicked
  };

  return (
    <>
      <div className='coverBanner_container'>
        <div className='coverBanner_content'>
          <div className="container">
            <div className='content'>
              <p className='coverBanner_para'>Empower Your Business with Productive Partnerships</p>
              <h2 className='coverBanner_heading'>Recruit a dynamic workforce as our business partner, prioritizing optimal client performance.</h2>
              <button className='coverBanner_Btn' onClick={handleClick}>Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverBanner;
