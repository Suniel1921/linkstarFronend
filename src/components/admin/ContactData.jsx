import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactData = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      // const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/upload/allContactData`);
      if (response.data.success) {
        setContactData(response.data.data);
      } else {
        console.error('Error fetching contact data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  return (
    <div>
      <h3>Contact Data</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{contact.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{contact.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactData;
