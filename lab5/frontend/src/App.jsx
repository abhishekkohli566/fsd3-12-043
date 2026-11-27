import { useState } from "react";
import MyButton from "./mybutton";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isLogin, setLogin] = useState(false);
  // if else by terniary o/p
  return isLogin ? <Home setLogin={setLogin} /> : <Login setLogin={setLogin} />;
  //if true than load oth
  // return isLogin && <Home/>;
 // return isLogin || <Login />;
}
 
export default App;
