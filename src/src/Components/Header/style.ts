import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f5f5f7;
  color: #6e6e73;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  .headerContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    max-width: 1400px;

    a {
      color: #1d1d1f;
    }

    .logo {
      font-size: 28px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 20px;

      button{
        border: none;
        background-color: transparent;
        font-size: 18px;
      }

      .area-qty {
        position: relative;

        .qty {
          background-color: #1d1d1f;
          color: #f5f5f7;
          padding: 5px;
          border-radius: 50%;
          height: 15px;
          width: 15px;

          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;
          top: 30px;
          right: 0;
        }
      }
    }

    @media (max-width: 550px) {
      justify-content: center;
    }
  }
`;
