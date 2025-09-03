import styled from 'styled-components';
import SourceItem from './SourceItem';

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  gap: 16px;
`;

const SourceList = () => {
    return (
    <Container>
            <SourceItem></SourceItem>
            <SourceItem></SourceItem>
            <SourceItem></SourceItem>
    </Container>
    );
  }
  
  export default SourceList;