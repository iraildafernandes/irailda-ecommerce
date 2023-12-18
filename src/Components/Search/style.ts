import styled from "styled-components";

export const AreaContainerSearch = styled.div`
  display: flex;
  
  input{
    height: 45px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    padding: 0 12px;
    outline: 0;

    &::placeholder {
      opacity: 0.5;
      color: gray;
      font-style: italic;
    }
  }

  button{
    border: none;
    background-color: transparent;
    padding: 0 10px;
  }

`;