import React from "react";
import Button from "@material-ui/core/Button";
import SimpleCard from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";
function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <CircularProgress />
      <SimpleCard />
    </>
  );
}

export default App;
