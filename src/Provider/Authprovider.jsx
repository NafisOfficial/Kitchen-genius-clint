import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext(null)

const Authprovider = ({children}) => {

    const auth = getAuth(app)

    
    const [user,setUser] = useState(null)

    const createUserByEmailPassword = (email , password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    


    const authInfo = {user,setUser,createUserByEmailPassword}


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;