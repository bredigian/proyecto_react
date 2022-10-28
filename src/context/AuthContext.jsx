import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export const AuthContext = React.createContext()
const AuthProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState({})
  const [userData, setUserData] = useState({})
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
      setUserCurrent(userCurrent)
    })
    return () => unsuscribe()
  }, [])
  useEffect(() => {
    const db = getFirestore()
    const usersCollection = collection(db, "users")
    if (userCurrent) {
      const queryCollection = query(
        usersCollection,
        where("email", "==", `${userCurrent.email}`)
      )
      getDocs(queryCollection).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserData({ ...doc.data() })
        })
      })
    }
  }, [userCurrent])
  return (
    <AuthContext.Provider
      value={{ signIn, signUp, logOut, userCurrent, userData }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
