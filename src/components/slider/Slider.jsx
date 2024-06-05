import React, { useState, useEffect } from "react";
import "../slider/slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  // const images = ['/image/asset 41.jpeg', '/image/asset 42.jpeg'];
  const images = ["/image/bg8.jpg", "/image/bg9.jpg", "/image/bg12.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider_container">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={idx === index ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="text container">
            <p>Nepal's Top Recruitment Solution Provider</p>
            <h2 className="heading">
            Need skilled workers from Nepal? Linkstart Manpower provides
            the best employees for the Gulf, Malaysia, and Europe
            </h2>
            {/* <p>
            Elevate your recruitment strategy with Nepal's leading manpower agency. Our comprehensive solutions ensure seamless hiring processes.
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;















// import React from "react";
// import "../slider/slider.css";
// import { useNavigate } from "react-router-dom";

// const Slider = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="bgContainer">
//         <div className="container">
//           <div className="bg_content">
//             <p className="bgPara">Nepal's Top Recruitment Solution Provider</p>
//             <h2 className="bgHeading heading1">Top-tier manpower agency in Nepal</h2>
//             <h2 className="bgHeading heading2">
//               <span className="spanText">delivering</span> comprehensive
//             </h2>
//             <h2 className="bgHeading">staffing services.</h2>
//             <img src="/image/asset 2.png" alt="" />
//             <div className="rating">
//               <img className="ratingimg" src="/image/rating.png" alt="" />
//               <p className="ratingText">4.5 Rating Star by Clients</p>
//             </div>
//             <div className="graphics">
//               <img
//                 className="logo1Animate graphic1"
//                 src="/image/asset 26.png"
//                 alt=""
//               />
//               <img
//                 className="logo2Animate graphic2"
//                 src="/image/asset 27.png"
//                 alt=""
//               />
//               {/* <img className='logo2Animate graphic2' src="/image/asset 28.png" alt="" /> */}
//             </div>

//             <div className="btnContainer">
//               <button onClick={()=>navigate('/contact')} className="contact_btn">Contact</button>
//               <button onClick={()=>navigate('/procedure/how-its-work')} className="how_we_work_btn">How We Work</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;
