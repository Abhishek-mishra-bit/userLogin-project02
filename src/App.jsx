// Write your code at relevant places in the code below:

import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthCotext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthCotext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
