import React, { useContext } from "react";
import Container from "./components/Main/Container";
import SignIn from "./components/SignIn/SignIn";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return <>{user ? <Container /> : <SignIn />}</>;
};

export default App;
