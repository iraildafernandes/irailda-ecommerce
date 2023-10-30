import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 60px 0;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  .img-area {
    width: 40%;

    img {
      height: 250px;
    }
    p {
      margin-top: 60px;
    }
  }

  .info-area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      border: none;
      background-color: #121212;
      color: #fff;
      padding: 9px 20px;
      border-radius: 18px;
      margin: 12px 0;
      max-width: 350px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
