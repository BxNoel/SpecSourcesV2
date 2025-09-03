import SourceBuilder from '../components/SourceBuilder';
import SourceList from '../components/SourceList';
import styled from 'styled-components';


const HeaderText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 500;
  color: #36476D;
  text-align: center;
  font-weight: bold;
`

const HomePage = () => {
    return (
        <>
        <HeaderText> Spectaotr's Sources </HeaderText>
        <SourceBuilder></SourceBuilder>
        <SourceList></SourceList>
        </>
    );
}

export default HomePage;