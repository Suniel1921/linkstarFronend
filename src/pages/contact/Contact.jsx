
import { useState } from 'react';
import axios from 'axios';
import '../contact/contact.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/upload/contactus`, formData);
      //  const response = await axios.post('http://localhost:5000/api/v1/upload/contactus', formData);
      console.log(response.data);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred');
    }
  };
  

  return (
    <>
      <div className='contact_container'>
        <div className="container">
          <div className="contact_content global_margin_top">
            <div className='address_container'>              
              <h3>Contact Details</h3>
              <p>Link Star Manpower Services Pvt. Ltd.</p>
              <p><FaMapMarkerAlt/>Samakhusi,Kathmandu,Nepal</p>
              <p> <MdEmail/>info@linkstar.com.np</p>
              <p> <FaPhoneAlt/>+97714957047</p>           
            </div>
            <div className='form_container'>
              <h3>Inquiry Form</h3>
              <form className='form' onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name' />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email'/>
                <textarea className='message' name="message" value={formData.message} onChange={handleChange} placeholder='Enter Your Message'/>
                <button className='inquiryBtn' type="submit">Submit</button>
              </form>
            </div>
            <div className='map_container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1442.4861057264834!2d85.31527415127786!3d27.737026769562128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194267848355%3A0x20df27e6e4394186!2sLink%20Star%20Manpower%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1716873669301!5m2!1sen!2snp" width="400" height="310"></iframe>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
};

export default Contact;
