import React from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 15px;
`;

const Name = styled(TextField)`
  .MuiFormLabel-root.Mui-focused {
    color: #2d819c;
  }
`;
const Password = styled(TextField)``;
const Login = styled(Button)`
  &.MuiButton-contained {
    background-color: #2d819c;
    color: #ffffff;
    font-size: 15px;
  }
  &.MuiButton-contained:hover {
    background-color: red;
  }
`;

function Home() {
  const history = useHistory();
  const navigateToAbout = () => {
    history.push("/about");
  };
  return (
    <>
      <h2>Home</h2>
      <Wrapper>
        <Name variant="outlined" label="Username" />
        <Password variant="outlined" type="password" label="Password" />
        <Login variant="contained" onClick={navigateToAbout}>
          Login
        </Login>
      </Wrapper>
    </>
  );
}

export { Home };
