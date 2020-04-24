import React from "react";
import { axiosWithAuth } from "../components/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <form>
          <input type="text" name="username" placeholder="usernam . ." />

          <input type="password" name="password" placeholder="password . ." />
        </form>
      </div>
    </>
  );
};

export default Login;
