import { useState } from "react";
import { useContext } from "react";
import { myLoginContext } from "./LoginContext";


const AuthApp=()=>{
    const [username,setUsername]=useState("");
    const{login} = useContext(myLoginContext);
    return(
        <>
            Enter name:
            <input type="text" value={username} 
            onChange={(e)=>{setUsername(e.target.value)}}/>
            <button onClick={()=>{login(username)}}>Login</button>
        
        </>
    )
}

export default AuthApp;