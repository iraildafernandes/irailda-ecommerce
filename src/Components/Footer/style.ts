import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f5f5f7;
  color: #6e6e73;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  
  .footerContent{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;

    a {
      color: #6e6e73;
      &:hover{
        color: #121212;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      font-size: 28px;
      font-weight: bold;
    }

    .address-area {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      line-height: 20px;
      margin: 20px 0;

      span {
        display: block;
      }
    }

    .media-area {
      display: flex;
      flex-direction: column;

      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0;
      }
    }

  }

  @media (min-width: 850px) {
    .footerContent{
      flex-direction: row;
      justify-content: space-between;

      .address-area{
        align-items: flex-start;
      }
    }
  }

`;
