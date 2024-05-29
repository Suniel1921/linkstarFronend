import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../accordian/accordian.css';

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isAccordionExpanded = (index) => {
    return activeIndex === index;
  };

  return (
      <div className='accordian_container global_margin_top'>
        <h4 className='accordianHeading'>Recruting Staff To</h4>
      <div className="container">
        <div className="accordian_content">
          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(0)}>
              <span className='arrowIcon'>{isAccordionExpanded(0) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Security & Servies
            </h3>
            {isAccordionExpanded(0) && (
              <p className='accord_para'>
              Providing top-notch security and services tailored to your needs.</p>
            )}
          </div>
          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(1)}>
              <span>{isAccordionExpanded(1) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Government Offices
            </h3>
            {isAccordionExpanded(1) && (
             <p className='accord_para'>administering services, regulations, and policies for public welfare and governance.</p>
            )}
          </div>
          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(2)}>
              <span>{isAccordionExpanded(2) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span>HealthCare
            </h3>
            {isAccordionExpanded(2) && (
              <p className='accord_para'> vital services promoting well-being, treatment, and prevention for individuals and communities.</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(3)}>
              <span>{isAccordionExpanded(3) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Facilities Management
            </h3>
            {isAccordionExpanded(3) && (
              <p className='accord_para'> ensuring optimal functionality, safety, and efficiency of built environments and infrastructure.</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(4)}>
              <span>{isAccordionExpanded(4) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Farm & Agriculture
            </h3>
            {isAccordionExpanded(4) && (
              <p className='accord_para'>cultivating land, producing food, and sustaining ecosystems for nourishment and sustainability.</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(5)}>
              <span>{isAccordionExpanded(5) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Transport & Logistics
            </h3>
            {isAccordionExpanded(5) && (
              <p className='accord_para'>facilitating efficient movement of goods and services, optimizing supply chains for seamless operations. </p>
            )}
          </div>

          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(6)}>
              <span>{isAccordionExpanded(6) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Retail & Sales
            </h3>
            {isAccordionExpanded(6) && (
              <p className='accord_para'>connecting consumers with products and services, driving economic activity and customer satisfaction.</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 className='hello' onClick={() => toggleAccordion(7)}>
              <span>{isAccordionExpanded(7) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Construction
            </h3>
            {isAccordionExpanded(7) && (
              <p className='accord_para'> building infrastructure, homes, and structures, shaping communities and driving economic development.</p>
            )}
          </div>
          {/* Add more accordion items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
