import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  font-size: 18px;
  width: 350px;
  height: 350px;
  border-radius: 18px;

  img {
    transition: ease-in-out 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  a {
    padding: 50px;
    width: 70%;

    display: flex;
    justify-content: center;
  }

  .areaInfo {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    height: 100%;

    span {
      padding: 5px 0;
      text-transform: uppercase;
    }

    span ~ span {
      font-size: 16px;
    }

    button {
      border: none;
      background-color: #121212;
      color: #fff;
      padding: 9px 20px;
      border-radius: 18px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
