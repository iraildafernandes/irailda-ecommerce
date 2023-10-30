import styled from "styled-components";

export const HeaderContainer = styled.header`
  nav {
    background-color: #f5f5f7;
    display: flex;
    justify-content: space-between;
    padding: 20px;

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
      gap: 20px;
      align-items: center;
    }
  }
`;
