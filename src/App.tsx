import React from "react";
import SimpleCard from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MyButton } from "./components/Button/Button";
import Routes from "./routes";

function App() {
  return (
    <>
      {/* <MyButton text="Submit" />
      <CircularProgress />
      <SimpleCard /> */}
      <Routes />
    </>
  );
}

export default App;
