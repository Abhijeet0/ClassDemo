import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Home() {
  const history = useHistory();
  const navigateToAbout = () => {
    history.push("/about");
  };
  return (
    <>
      <h2>Home</h2>
      <Button variant="contained" onClick={navigateToAbout}>
        Goto About
      </Button>
    </>
  );
}

export { Home };
