import styled from "styled-components";

export const ContainerCart = styled.div`
  padding: 80px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    padding: 30px 20px;
  }

  table {
    background-color: #f5f5f7;
    width: 50%;
    text-align: center;
    border: none;
    border-radius: 18px;

    thead {
      border: none;

      background-color: #121212;
      color: #fff;
    }

    td {
      height: 40px;
      padding: 20px;
      border: none;
      border-radius: 18px;
    }

    .delete {
      border: none;
      background-color: transparent;
      padding: 12px;
    }

    @media (max-width: 500px) {
      table {
        width: 90%;
      }
    }
  }

  .infoProduct {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 50px;
      width: 50px;
    }
  }

  .actionArea {
    display: flex;
    justify-content: space-around;
    align-items: center;

    button ~ button {
      color: red;
    }

    button {
      border: none;
      background-color: transparent;
      padding: 9px 20px;
    }
  }

  .areaTotal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    padding: 20px 40px;
    margin: 20px 60px;
    background-color: #f5f5f7;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 20px;
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

    .buttonCart {
      display: flex;
      gap: 10px;
      padding: 10px;
    }

    input[type="text"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;

      @media (max-width: 500px) {
        padding: 5px;
      }
    }
  }
`;
