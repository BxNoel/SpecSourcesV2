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

    //MAKE API CALL TO DATABASE TO GET SOURCES
    const [sources, setSources] = useState([]);
    //Make list to store itemes, use state to Update MAKE CALL TO DB
    React.useEffect(() => {
        axios.get('http://localhost:8000/all')
        .then(response => {
            console.log("Raw data:", response.data);
            setSources(response.data.message);
            //Mapping everything to the correct format
            const mapped_sources = response.data.map(DB_MODEL => ({
                id: DB_MODEL.id,
                sourceName: DB_MODEL.name,
                sourceEmail: DB_MODEL.email
              }));
              setSources(mapped_sources);
        })
        .catch(error => {
            console.error('There was an error connecting to the API!', error);
        });
    }, []);

    const handleAddSource = (newSource) => {
        setSources([...sources, newSource]);
        //Lets revamp this, we want to make a post request to the backend to add the source to the database
        console.log( newSource );
    };

    const handleDelete = (indexToDelete) => {
        setSources(sources.filter((_, index) => index !== indexToDelete));
    };


    return (
        <div>
            <HeaderText> Spectaotr's Sources </HeaderText>
            <SourceBuilder onAddSource={handleAddSource} />
            <SourceList items={sources} onDelete={handleDelete} />
        </div>
    );
}

export default HomePage;