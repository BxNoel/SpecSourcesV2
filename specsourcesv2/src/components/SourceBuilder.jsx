import styled from 'styled-components';
import { useState } from 'react';

const BlueBox = styled.div`
  background: linear-gradient(135deg, #AFD7FA 0%, #9BC5F5 100%);
  width: 1320px;
  height: 143px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(175, 215, 250, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SourceText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #2c3e50;
  margin: 0;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2em;
`

const FormBox = styled.input`
  width: 280px;
  height: 42px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0 15px;
  margin-left: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
  
  &::placeholder {
    color: #7f8c8d;
  }
`

const AddButton = styled.button`
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 2em;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(40, 167, 69, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
  }
`

const SourceBuilder = ({ onAddSource }) => {
  const [sourceName, setSourceName] = useState('');
  const [sourceEmail, setSourceEmail] = useState('');

  const handleAddSource = () => {
    if (sourceName.trim() && sourceEmail.trim()) {
      onAddSource({
        sourceName: sourceName,
        sourceEmail: sourceEmail
      });
      
      // Clear the form after adding
      setSourceName('');
      setSourceEmail('');
    }
  };

  return (
    <BlueBox>
      <FormContainer>
        <SourceText>Source Name</SourceText>
        <FormBox 
          type="text" 
          placeholder="Enter Source Name" 
          value={sourceName}
          onChange={(e) => setSourceName(e.target.value)}
        /> 
      </FormContainer>
      <FormContainer>
        <SourceText>Source Email</SourceText>
        <FormBox 
          type="email" 
          placeholder="Enter Source Email" 
          value={sourceEmail}
          onChange={(e) => setSourceEmail(e.target.value)}
        /> 
      </FormContainer>
      <AddButton onClick={handleAddSource}>Add Source</AddButton>
    </BlueBox>
  );
}

export default SourceBuilder;