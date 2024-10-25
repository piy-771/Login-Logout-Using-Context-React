import { createContext, useState } from "react";
const myLoginContext=createContext();
const LoginContext=({children})=>{
    const [user,setUser] = useState({name:"",auth:false});
                                   //user ={name:"",auth:false);
    const login=(nm)=>{
        setUser({name:nm,auth:true});
    }                               
    const logout=()=>{
        setUser({name:"",auth:false});    }
    return(
        <>
            <myLoginContext.Provider value={{user,login,logout}}>
                {children}
            </myLoginContext.Provider>
        
        </>
    )
}

export default LoginContext;
// eslint-disable-next-line react-refresh/only-export-components
export  {myLoginContext};
