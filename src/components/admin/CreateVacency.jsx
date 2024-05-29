import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateVacancyForm = () => {
  const [formData, setFormData] = useState({
    position: '',
    vacancy: '',
    food: '',
    salary: '',
    accommodation: '', // Corrected typo here
    transportation: '',
    overtime: '',
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if image file is selected
    if (!formData.image) {
      toast.error('Please select an image file');
      return;
    }
    
    // Display "Please wait while the photo is being uploaded" toast message
    const toastId = toast.loading('Please wait while the photo is being uploaded');
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('position', formData.position);
      formDataToSend.append('vacancy', formData.vacancy);
      formDataToSend.append('food', formData.food);
      formDataToSend.append('salary', formData.salary);
      formDataToSend.append('accommodation', formData.accommodation);
      formDataToSend.append('transportation', formData.transportation);
      formDataToSend.append('overtime', formData.overtime);
      formDataToSend.append('image', formData.image);
  
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/upload/uploadImg`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response);
      if (response.data.success) {
        // Dismiss the loading toast
        toast.dismiss(toastId);
        // Show success message
        toast.success(response.data.message);
        // Reset form data
        setFormData({
          position: '',
          vacancy: '',
          food: '',
          salary: '',
          accommodation: '',
          transportation: '',
          overtime: '',
          image: null
        });
      }
      // Add success message or redirect to success page
    } catch (error) {
      console.error('Error creating vacancy:', error);
      // Dismiss the loading toast
      toast.dismiss(toastId);
      // Show error message
      toast.error(error.response.data.message);
      // Handle error
    }
  };
  
  

  return (
    <div style={formContainerStyle}>
      <p style={headingStyle}>Create Vacancy</p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Position:</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Vacancy:</label>
          <input type="text" name="vacancy" value={formData.vacancy} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>salary:</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>food:</label>
          <input type="text" name="food" value={formData.food} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>accommodation:</label> {/* Corrected label here */}
          <input type="text" name="accommodation" value={formData.accommodation} onChange={handleChange} style={inputStyle} /> {/* Corrected name here */}
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>transportation:</label>
          <input type="text" name="transportation" value={formData.transportation} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>overtime:</label>
          <input type="text" name="overtime" value={formData.overtime} onChange={handleChange} style={inputStyle} />
        </div>
        {/* Add input fields for other vacancy details */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Image:</label>
          <input type="file" name="image" onChange={handleChange} style={inputStyle} />
        </div>
        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  // border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
 
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px'
};

const formStyle = {
  display: 'grid',
  gridGap: '10px'
};

const inputGroupStyle = {
  display: 'grid',
  gridTemplateColumns: '120px 1fr',
  alignItems: 'center'
};

const labelStyle = {
  fontWeight: 'bold'
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const submitButtonStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default CreateVacancyForm;
