import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";



export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const host = "http://192.168.0.143:4000/api/auth";
    
    const [success,setSuccess] = useState(false);
    const [responseText, setResponseText] = useState();
    
    useEffect(() => {
        if (responseText) {
          if (success) {
            alert("Registration Successful! Please Login");
            Navigate("/login");
            
          } else {
            alert(responseText);
            setSuccess(false);
            setResponseText("")
          }
        }
      }, [responseText, success]);

    const addUser = async (newUser) =>{

        try {
            const response = await axios.post(`${host}/createuser`, newUser,{

                    'Content-Type': 'application/json'
            });

            setSuccess(true);
            setResponseText(response.data);
            console.log("this is restext",response.statusText);
            
        } catch (error) {
            console.log(error.response.data);
            setResponseText(error.response.data);
            setSuccess(false);

            console.log("this is restext2");
        }
    };
    


    return <UserContext.Provider value={{success, responseText,addUser}}>{children}</UserContext.Provider>
}