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

const SourceList = ({ items, onDelete }) => {
    return (
        <Container>
            {items.map((item, index) => (
                <SourceItem 
                    key={index}
                    index={index + 1} 
                    sourceName={item.sourceName} 
                    sourceEmail={item.sourceEmail}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </Container>
    );
}

export default SourceList;