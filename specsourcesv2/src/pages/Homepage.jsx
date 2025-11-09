import SourceBuilder from '../components/SourceBuilder';
import SourceList from '../components/SourceList';
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const HeaderText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 500;
  color: #36476D;
  text-align: center;
  font-weight: bold;
`

const HomePage = () => {

    const [sources, setSources] = useState([]);
    const [backendMessage, setBackendMessage] = useState('');
 
    //DEMONSTRATE THIS
    axios.get('http://localhost:8000/')
      .then((response) => {
        setBackendMessage(response.data.message);
        console.log(response.data.message);
      })
      .catch(err => console.error('Fetch error:', err));

    
    React.useEffect(() => {
        axios.get('http://localhost:8000/all')
          .then((response) => {
            setSources(response.data);
          })
          .catch(err => console.error('Fetch error:', err));
      }, []);
  
    const handleAddSource = (newSource) => {
      // Schemas is used here to ensure the data is in the correct format.
      const payload = { name: newSource.sourceName, email: newSource.sourceEmail };

      axios.post('http://localhost:8000/create', payload)
        //This is a short cut to just get the data.
        .then(({ data }) => {
          setSources(prev => [...prev, {
            id: data.id,
            name: data.name,
            email: data.email
          }]);
        })
        .catch(err => console.error('Add error:', err));
    };
  
    const handleDelete = (idToDelete) => {
      setSources(prev => prev.filter(s => s.id !== idToDelete));
      //Fetch ID to delete from the backend
      axios.delete(`http://localhost:8000/delete/${idToDelete}`)
        .catch(err => {
          console.error('Delete error:', err);
        });
    };
  
    return (
      <div>
        <p>{backendMessage}</p>
        <HeaderText>Spectator's Sources</HeaderText>
        <SourceBuilder onAddSource={handleAddSource} />
        <SourceList items={sources} onDelete={handleDelete} />
      </div>
    );
  };
   
  export default HomePage;