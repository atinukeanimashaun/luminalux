import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signin with gmail
  const signUpWithGmail =() => {
    return  signInWithPopup(auth, googleProvider)

  }

  //login using email & password
  const login = (email, password ) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout 
  const logOut = () => {
    return signOut(auth) // Return the promise from signOut
      .catch((error) => {
        console.error("Error logging out: ", error);
        throw error; // Rethrow the error to be caught in the calling function
      });
  };
  

  // update profile
  const updateuserProfile = (name, photoURL) => {
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    })
  }

  // signed-in user
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () => {
        return unsubscribe();
    }
}, [])

  const authInfo ={
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateuserProfile,
    loading,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
