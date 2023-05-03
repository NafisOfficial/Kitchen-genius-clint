import React, { useState } from 'react';
import { createContext } from 'react';



const Authprovider = ({childern}) => {

    const authContex = createContext(null)


    const [user,setUser] = useState(null)


    const authInfo = {user}


    return (
        <authContex.Provider value={authInfo}>
            {childern}
        </authContex.Provider>
    );
};

export default Authprovider;