import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext(null)

const Authprovider = ({children}) => {

    const auth = getAuth(app)
    
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

    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user,setUser,createUserByEmailPassword,signInByEmailAndPass,logOut,singInByGoogle}


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;