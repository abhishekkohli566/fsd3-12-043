//import React from 'react'

const Home = ({setLogin}) => {
const handleLogout =() =>{
  setLogin(false);
};
return( <>
  <h1>Home Page</h1>
  <h2> You are loged in</h2>
  <button onClick= {handleLogout}>Logged out</button>
  </> 
); 
};

export default Home;