import React, { useEffect, useState } from "react";
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

function validateEmail(email: string) {
  //Validates the email address
  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  console.log("email", emailRegex.test(email));
  return emailRegex.test(email);
}

function validatePhone(phone: string) {
  //Validates the phone number
  var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
  console.log("phoneRegex.test(phone);", phoneRegex.test(phone));
  return phoneRegex.test(phone);
}

function doValidate(username: string) {
  debugger;
  if (!validateEmail(username) || !validatePhone(username)) {
    // alert("Invalid Username");
    return true;
  }
  return false;
}

function Home() {
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const onNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const navigateToAbout = () => {
    // debugger;
    if (name === "") {
      setNameError(true);
      setNameErrorMsg("Please enter username");
    } else if (!doValidate(name)) {
      setNameError(true);
      setNameErrorMsg("Invalid Username");
    } else {
      setNameError(false);
      setNameErrorMsg("");
      history.push("/about");
    }
  };

  return (
    <>
      <h2>Home</h2>
      <Wrapper>
        <Name
          variant="outlined"
          label="Username"
          value={name}
          onChange={onNameChange}
          error={nameError}
          helperText={nameErrorMsg}
        />
        <Password variant="outlined" type="password" label="Password" />
        <Login variant="contained" onClick={navigateToAbout}>
          Login
        </Login>
      </Wrapper>
    </>
  );
}

export { Home };
