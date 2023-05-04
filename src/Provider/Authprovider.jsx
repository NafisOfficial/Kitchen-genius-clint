import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext(null)

const Authprovider = ({children}) => {

    const auth = getAuth(app)
    

    const [userdata,setUserData] = useState('');
    
    const [user,setUser] = useState(null)

    const createUserByEmailPassword = (email , password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInByEmailAndPass = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singInByGoogle = (provider) =>{

       return signInWithPopup(auth,provider)

    }


    const authInfo = {user,setUser,createUserByEmailPassword,signInByEmailAndPass,userdata,setUserData,singInByGoogle}


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;