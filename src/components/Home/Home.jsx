import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthCotext from "../../store/auth-context";

const Home = () => {
  const authCtx = useContext(AuthCotext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onclick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
