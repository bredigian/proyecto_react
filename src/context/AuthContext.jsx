import React from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { useState } from "react"
import { useEffect } from "react"
export const AuthContext = React.createContext()
const AuthProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState({})
  const auth = getAuth()
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (userCurrent) => {
      console.log(userCurrent)
      setUserCurrent(userCurrent)
    })
    return () => unsuscribe()
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, signUp, logOut, userCurrent }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
