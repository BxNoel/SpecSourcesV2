import SourceBuilder from '../components/SourceBuilder';
import SourceList from '../components/SourceList';
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const initial_items = [
    {
        sourceName: "Noel Negron",
        sourceEmail: "nmn2127@columbia.edu"
    },
    {
        sourceName: "Andre Perez",
        sourceEmail: "avp2125@columbia.edu"
    },
    {
        sourceName: "Caroline Roldan",
        sourceEmail: "cr4302@barnard.edu"
    }   
];


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
  
    React.useEffect(() => {
      axios.get('http://localhost:8000/all')
        .then(({ data }) => {
          const mapped = data.map(s => ({
            id: s.id,
              sourceName: s.name,
              sourceEmail: s.email
          }));
          setSources(mapped);
        })
        .catch(err => console.error('Fetch error:', err));
    }, []);
  
    const handleAddSource = (newSource) => {
      // Send to backend first so we get the real id
      const payload = { name: newSource.sourceName, email: newSource.sourceEmail };
      axios.post('http://localhost:8000/create', payload)
        .then(({ data }) => {
          setSources(prev => [...prev, {
            id: data.id,
            sourceName: data.name,
            sourceEmail: data.email
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
        <HeaderText>Spectator's Sources</HeaderText>
        <SourceBuilder onAddSource={handleAddSource} />
        <SourceList items={sources} onDelete={handleDelete} />
      </div>
    );
  };
  
  export default HomePage;