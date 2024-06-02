// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import '../vacency/vacency.css';
// import {Link} from 'react-router-dom'


// const Vacency = () => {
//   const [vacancies, setVacancies] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);


//   const getAllVacancy = async () => {
//     try {
//       const apiUrl = import.meta.env.VITE_API_URL;
//       if (!apiUrl) {
//         toast.error('API URL is not defined');
//         return;
//       }

//       const response = await axios.get(`${apiUrl}/api/v1/upload/getAllVacency`);
//       // console.log('API response:', response);

//       if (response.data.success) {
//         // console.log('Vacancies data:', response.data.data);
//         setVacancies(response.data.data);
//       } else {
//         toast.error(response.data.message || 'No vacancies found');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   useEffect(() => {
//     getAllVacancy();
//   }, []);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   const handleClosePopup = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className='vacency_container'>
//       <div className="container">
//         <div className="vacency_content global_margin_top">
//           <h1 style={headingStyle}>Current Open Vacancies</h1>
//           {vacancies.length === 0 ? (
//             <p>No vacancies found</p>
//           ) : (
//             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//               <thead>
//                 <tr>
//                   <th style={tableHeaderStyle}>Image</th>
//                   <th style={tableHeaderStyle}>Position</th>
//                   <th style={tableHeaderStyle}>Vacancy</th>
//                   <th style={tableHeaderStyle}>Salary</th>
//                   <th style={tableHeaderStyle}>Food</th>
//                   <th style={tableHeaderStyle}>Accommodation</th>
//                   <th style={tableHeaderStyle}>Transportation</th>
//                   <th style={tableHeaderStyle}>Overtime</th>
//                   <th style={tableHeaderStyle}>Apply</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {vacancies.map((vacancy) => (
//                   <tr key={vacancy._id}>
//                     <td style={tableCellStyle}>
//                       <img 
//                         src={vacancy.images[0]} 
//                         alt={vacancy.position} 
//                         width="100" 
//                         style={{ cursor: 'pointer' }}
//                         onClick={() => handleImageClick(vacancy.images[0])}
//                       />
//                     </td>
//                     <td style={tableCellStyle}>{vacancy.position}</td>
//                     <td style={tableCellStyle}>{vacancy.vacancy}</td>
//                     <td style={tableCellStyle}>{vacancy.salary}</td>
//                     <td style={tableCellStyle}>{vacancy.food}</td>
//                     <td style={tableCellStyle}>{vacancy.accommodation}</td>
//                     <td style={tableCellStyle}>{vacancy.transportation}</td>
//                     <td style={tableCellStyle}>{vacancy.overtime}</td>
//                     <td style={tableCellStyle}><Link to='/apply-now'>Apply Here</Link></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {selectedImage && (
//         <div style={popupOverlayStyle}>
//           <div style={popupContentStyle}>
//             <span style={closeButtonStyle} onClick={handleClosePopup}>&times;</span>
//             <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '100%' }} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const headingStyle = {
//   textAlign: 'center',
//   marginBottom: '20px',
//   fontSize: '24px',
//   color: '#333',
// };

// const tableHeaderStyle = {
//   border: '1px solid black',
//   padding: '8px',
//   backgroundColor: '#f2f2f2'
// };

// const tableCellStyle = {
//   border: '1px solid black',
//   padding: '8px',
//   textAlign: 'left',
// };

// const popupOverlayStyle = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center'
// };

// const popupContentStyle = {
//   position: 'relative',
//   background: '#fff',
//   padding: '20px',
//   borderRadius: '8px',
//   maxWidth: '90%',
//   maxHeight: '90%',
//   overflow: 'auto'
// };

// const closeButtonStyle = {
//   position: 'absolute',
//   top: '10px',
//   right: '10px',
//   fontSize: '30px'
// };

// export default Vacency;


// ****************static code*************

import { useState } from 'react';
import '../vacency/vacency.css';
import { Link } from 'react-router-dom';

const Vacency = () => {
  const [vacancies] = useState([
    {
      _id: '1',
      images: ['https://via.placeholder.com/100'],
      position: 'Software Engineer',
      vacancy: '5',
      salary: '$5000',
      food: 'Provided',
      accommodation: 'Provided',
      transportation: 'Provided',
      overtime: 'Available',
    },
    {
      _id: '2',
      images: ['https://via.placeholder.com/100'],
      position: 'Product Manager',
      vacancy: '2',
      salary: '$7000',
      food: 'Provided',
      accommodation: 'Provided',
      transportation: 'Provided',
      overtime: 'Available',
    },
    // Add more static vacancies as needed
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className='vacency_container'>
      <div className="container">
        <div className="vacency_content global_margin_top">
          <h1 style={headingStyle}>Current Open Vacancies</h1>
          {vacancies.length === 0 ? (
            <p>No vacancies found</p>
          ) : (
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Image</th>
                  <th style={tableHeaderStyle}>Position</th>
                  <th style={tableHeaderStyle}>Vacancy</th>
                  <th style={tableHeaderStyle}>Salary</th>
                  <th style={tableHeaderStyle}>Food</th>
                  <th style={tableHeaderStyle}>Accommodation</th>
                  <th style={tableHeaderStyle}>Transportation</th>
                  <th style={tableHeaderStyle}>Overtime</th>
                  <th style={tableHeaderStyle}>Apply</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id}>
                    <td style={tableCellStyle}>
                      <img 
                        src={vacancy.images[0]} 
                        alt={vacancy.position} 
                        width="100" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageClick(vacancy.images[0])}
                      />
                    </td>
                    <td style={tableCellStyle}>{vacancy.position}</td>
                    <td style={tableCellStyle}>{vacancy.vacancy}</td>
                    <td style={tableCellStyle}>{vacancy.salary}</td>
                    <td style={tableCellStyle}>{vacancy.food}</td>
                    <td style={tableCellStyle}>{vacancy.accommodation}</td>
                    <td style={tableCellStyle}>{vacancy.transportation}</td>
                    <td style={tableCellStyle}>{vacancy.overtime}</td>
                    <td style={tableCellStyle}><Link to='/apply-now'>Apply Here</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {selectedImage && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <span style={closeButtonStyle} onClick={handleClosePopup}>&times;</span>
            <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '100%' }} />
          </div>
        </div>
      )}
    </div>
  );
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333',
};

const tableHeaderStyle = {
  border: '1px solid black',
  padding: '8px',
  backgroundColor: '#f2f2f2',
};

const tableCellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyle = {
  position: 'relative',
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '90%',
  maxHeight: '90%',
  overflow: 'auto',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '30px',
};

export default Vacency;
