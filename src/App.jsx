import { useContext } from "react";
import { myLoginContext } from "./LoginContext";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const App=()=>{
  const{user}=useContext(myLoginContext)
  return(
    <>
      <h1>Welcome to Login System</h1>
       {user.auth?<UnAuthApp/>:<AuthApp/>} 
      

    </>
  )
}

export default App;