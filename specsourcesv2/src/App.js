import './App.css';
import HomePage from './pages/Homepage';
import axios from 'axios';
import React from 'react';

function App() {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error connecting to the API!', error);
      });
  }, []);
  return (
    <>
    <h1>{message}</h1>
    <HomePage/>
    </>
  );
}

export default App;