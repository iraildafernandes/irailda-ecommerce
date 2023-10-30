import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f5f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px;
  color: #6e6e73;

  a {
    color: #6e6e73;
  }

  .address-area {
    display: flex;
    flex-direction: column;
    line-height: 20px;

    span {
      display: block;
    }
  }
  .media-area {
    display: flex;
    flex-direction: column;
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
    justify-content: space-between;
    align-items: flex-start;
  }
`;
