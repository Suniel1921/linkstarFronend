

import { useState } from 'react';

import '../vacency/vacency.css';
import { Link } from 'react-router-dom';

const Vacency = () => {
  const [vacancies] = useState([
    {
      _id: '1',
      images: ['/demandImage/demand4.jpg'],
      positions: ['Sales Associates', 'Cleaner (Indoor)', 'Quality Assurence Officer',  'Quality Assurence Coordinator', 'Cctv Operator'],
      vacancy: ['Male: 18, Female: 29', 'Male: 7, Female: 0', 'Male: 1, Female: 0', 'Male: 1, Female: 0', 'Male: 2, Female: 0',],
      salary: ['140KD', '85KD', '140KD','140KD','140KD', ],
      food: 'Provided',
      expiredDate: '16/July/2024',
    },
    {
      _id: '2',
      images: ['/demandImage/demand3.jpg'],
      positions: ['Light Vachile Driver', 'Loading and Unloading Labor',],
      vacancy: ['Male: 9, Female: 0', 'Male: 1, Female: 0',],
      salary: ['140KD', '1000SR'],
      food: 'Provided',
      expiredDate: '15/July/2024',
      // transportation: 'Provided',
      // overtime: 'Available',
    },
    {
      _id: '3',
      images: ['/demandImage/demand.jpg'],
      positions: ['Restaurant Crew', 'Barista', 'StoreKeeper', 'Chefs Dcdp', 'Chefs Cdp', 'Dietitian'],
      vacancy: ['Male: 100, Female: 60', 'Male: 10, Female: 10', 'Male: 10, Female: 5', 'Male: 20, Female: 10', 'Male: 20, Female: 10', 'Male: 5, Female: 5'],
      salary: ['120KD', '130KD', '150KD', '160KD', '210KD', '250KD'],
      food: 'Provided',
      expiredDate: '02/June/2024',
      transportation: 'Provided',
      // overtime: 'Available',
    },
   
    {
      _id: '4',
      images: ['/demandImage/demand2.jpg'],
      positions: ['Barista', 'Chefs Cdp', 'Chefs Dcdp', 'StoreKeeper', 'Dietitian', 'Indoor (Helper)', 'Restaurant Crew'],
      vacancy: ['Male: 2, Female: 0', 'Male: 5, Female: 5', 'Male: 10, Female: 10', 'Male: 5, Female: 5', 'Male: 5, Female: 5', 'Male: 20, Female: 10', 'Male: 100, Female: 60'],
      salary: ['130KD', '210KD', '160KD', '150KD', '250KD', '120KD', '120KD'],
      food: 'Provided',
      expiredDate: '02/June/2024',
      transportation: 'Provided',
      // overtime: 'Available',
    },

  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className='vacancy_container'>
      <div className="container">
        <div className="vacancy_content global_margin_top">
          <h1 style={headingStyle}>Current Open Vacancies</h1>
          {vacancies.length === 0 ? (
            <p>No vacancies found</p>
          ) : (
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Image</th>
                  <th style={tableHeaderStyle}>Positions</th>
                  <th style={tableHeaderStyle}>Vacancy</th>
                  <th style={tableHeaderStyle}>Salary</th>
                  <th style={tableHeaderStyle}>Food</th>
                  <th style={tableHeaderStyle}>Interview Date</th>
                  <th style={tableHeaderStyle}>Transportation</th>
                  {/* <th style={tableHeaderStyle}>Overtime</th> */}
                  <th style={tableHeaderStyle}>Apply</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id}>
                    <td style={tableCellStyle}>
                      <img 
                        src={vacancy.images[0]} 
                        alt={vacancy.positions[0]} 
                        width="100" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageClick(vacancy.images[0])}
                      />
                    </td>
                    <td style={tableCellStyle}>
                      {vacancy.positions.map((position, index) => (
                        <div key={index}>{index + 1}. {position}</div>
                      ))}
                    </td>
                    <td style={tableCellStyle}>
                      {vacancy.vacancy.map((vacancyDetail, index) => (
                        <div key={index}>{index + 1}. {vacancyDetail}</div>
                      ))}
                    </td>
                    <td style={tableCellStyle}>
                      {vacancy.salary.map((salary, index) => (
                        <div key={index}>{index + 1}. {salary}</div>
                      ))}
                    </td>
                    <td style={tableCellStyle}>{vacancy.food}</td>
                    <td style={tableCellStyle}>{vacancy.expiredDate}</td>
                    <td style={tableCellStyle}>{vacancy.transportation}</td>
                    {/* <td style={tableCellStyle}>{vacancy.overtime}</td> */}
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
  top: '60px',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '30px',
  backgroundColor: '#D32027',
  color: 'white',
  borderRadius: '50%',
  height: '40px',
  width: '40px',  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
};

export default Vacency;
