import styled from 'styled-components';

const SourceBox = styled.div`
    width: 1300px;
    height: 107px;
    background: lightgrey;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const IndexPosition = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 24px;
`

const SourceName = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
`

const SourceEmail = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #666;
`

const DeleteButton = styled.button`
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    
    &:hover {
        background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
`

const SourceItem = ({ index, sourceName, sourceEmail, onDelete }) => {
    return (
      <SourceBox>
          <IndexPosition>{index}</IndexPosition>
          <SourceName>{sourceName}</SourceName>
          <SourceEmail>{sourceEmail}</SourceEmail>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </SourceBox>
    );
}

export default SourceItem;