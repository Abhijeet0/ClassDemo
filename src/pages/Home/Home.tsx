import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

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
const Job = styled(TextField)``;
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
  var phoneRegex = /^\d{10}$/; ///^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
  return phoneRegex.test(phone);
}

function doValidate(username: string) {
  debugger;
  if (!validateEmail && !validatePhone(username)) {
    // alert("Invalid Username");
    return false;
  }
  return true;
}

function createUser(name: string, job: string) {
  axios
    .post("https://reqres.in/api/users", {
      data: {
        name,
        job,
      },
    })
    .then((result) => {
      console.log("result", result.data);
    });
}

function Home() {
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const history = useHistory();
  const [data, setData] = useState<any>();
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setName(json.title);
    //   });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log("response", response.data);
        setData(response.data);
      });
  }, []);

  const onNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const onJobChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setJob(e.target.value);
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
      createUser(name, job);
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
        <Job
          variant="outlined"
          label="Job"
          value={job}
          onChange={onJobChange}
        />
        <Login variant="contained" onClick={navigateToAbout}>
          Login
        </Login>
      </Wrapper>
    </>
  );
}

export { Home };
