import styled from "styled-components";

export const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 40px;

    .content {
      display: flex;
      flex-direction: row;
      margin-top: 40px;

      button {
        margin-left: 20px;
        width: 140px;
        height: 40px;
      }
    }
  }
`;

export const LogoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  button {
    width: 140px;
    height: 40px;
  }
`;

export const UserComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const AppComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  div + div {
    margin: 40px;
  }
`;
