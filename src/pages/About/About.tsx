import Button from "@material-ui/core/Button";
import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  const navigateToUsers = () => {
    history.push("/users");
  };
  return (
    <>
      <h2>About</h2>
      <Button variant="contained" onClick={navigateToUsers}>
        Goto Users
      </Button>
    </>
  );
}

export { About };
