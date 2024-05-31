import React, { useState, useEffect } from "react";
import "../slider/slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ["/image/b4.jpg", "/image/m1.jpg", "/image/b3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
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
            Top-tier manpower agency in Nepal delivering <br />
             comprehensive staffing services
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
