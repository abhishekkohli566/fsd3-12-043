//import React from 'react'

const Login = ({setLogin}) => {
    const handleLogin =() =>{
        setLogin(true);
    };
  return <> 
  <h1> Login Page</h1>
  <input type="text" name="" id="" placeholder="enter username" />
  <br />
  <input type="passwrod" name="" id="" placeholder="enter password" />
  <br />
  <button onClick={handleLogin}>Login</button>
  </>
};

export default Login;
