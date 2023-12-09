import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const provider =new  GoogleAuthProvider();

const AuthProvides = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser =(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const loginUser =(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const logout =()=>{
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider);
    }



    const userInfo={createUser,loginUser,user,logout,signInWithGoogle,auth,loading};

    
    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvides;