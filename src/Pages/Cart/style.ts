import styled from "styled-components";

export const ContainerCart = styled.div`
  padding: 80px 60px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  table{
    background-color: #f5f5f7;
    width: 50%;
    text-align: center;


    thead{
    background-color: #121212;
    color: #fff;
    } 
    
    td{
      height: 40px;
      padding: 20px;
    }
  }

  .actionArea{
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      border: none;
      background-color: gray;
      /* color: #121212; */
      padding: 9px 20px;
      /* border-radius: 18px; */

      /* &:hover { */
        /* opacity: 0.8; */
      /* } */
    }

  }

  .areaTotal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    padding: 20px 60px;
    background-color: #f5f5f7;

    h2{
      font-size: 32px;
    }

    p{
      font-size: 24px;
    }

    button {
      border: none;
      background-color: #121212;
      color: #fff;
      font-size: 22px;
      padding: 9px 20px;
      border-radius: 18px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
