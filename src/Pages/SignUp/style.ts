import styled from "styled-components";

export const ContainerCenter = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  /* padding: 60px; */

  .signup {
    background-color: #efefef;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      margin: 1.5rem 0;
      color: #141219;
      cursor: pointer;
    }

    form {
      margin-top: 1.5rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      h1 {
        margin-bottom: 1rem;
        color: #141219;
      }

      .input-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media (max-width: 400px) {
          flex-direction: column;
        }

        div {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;

          input {
            margin-bottom: 1rem;
            height: 35px;
            width: 250px;
            border-radius: 4px;
            border: none;
            padding: 10px;
            font-size: 15px;
            background-color: #fff;
            outline: 0;
          }
        }
      }

      span {
        color: red;
        margin: 10px 0;
      }

      .action-area {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding: 10px 0;
      }

      button {
        height: 35px;
        border: 0;
        border-radius: 4px;
        background-color: #121212;
        color: #efefef;
        font-size: 1.3rem;
        padding: 0 20px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
