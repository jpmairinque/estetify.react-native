import React from 'react'
import { createContext, useEstate, useEffect } from 'react'
import { auth } from '../services/firebase'

export const AuthContext = createContext()

const AuthContext = ({children, navigation}) => {

 


    const signUp = async (email,password) =>{
        try{
            const res = await auth.createUserWithEmailAndPassword(email,password)
        
        }catch(err){
            throw new Error(err.message);
        }
    }
    

    return (
       <AuthContext.Provider value={{signUp}}>
           {children}


       </AuthContext.Provider>
    )
}

export default AuthContext
