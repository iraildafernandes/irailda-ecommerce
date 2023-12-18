import styled from "styled-components";

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;

  a{
    display: flex;
    align-items: center;
    gap: 10px;
  }

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
            background-color: silver;
            color: gray;
            outline: 0;

            &::placeholder {
              opacity: 0.5;
              color: gray;
            }
          }
        }
      }

      span {
        color: red;
        margin: 10px 0;
      }
    }
  }
`;
