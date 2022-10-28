import { Link, useNavigate } from "react-router-dom"
import React, { useContext, useState } from "react"
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore"

import { AuthContext } from "../context/AuthContext"
import Loading from "./Loading"
import SubmitLoader from "./SubmitLoader"
import { toast } from "react-toastify"

const Signup = () => {
  const { signUp, userCurrent } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLogging(true)
    const user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      wishlist: [],
      rol: "client",
    }
    try {
      await signUp(user.email, user.password)
      const db = getFirestore()
      const userDoc = collection(db, "users")
      addDoc(userDoc, user).then(() => {
        toast.success("User created done", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        setTimeout(() => {
          navigate("/")
        }, 1500)
      })
    } catch {
      setTimeout(() => {
        setIsLogging(false)
        setTimeout(() => {
          toast.error("Email already exists", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }, 1500)
      })
    }
  }
  setTimeout(() => {
    setLoading(true)
  }, 2500)
  if (loading) {
    return (
      <div
        className="sign d-flex flex-column align-items-center w-75 gap-5"
        onSubmit={handleSubmit}
      >
        <p className="sign-title m-0">Sign Up</p>
        <form className="sign-form d-flex flex-column align-items-center p-5 gap-4">
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">First name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Last name</label>
            <input type="text" id="lastName" />
          </div>
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Phone number</label>
            <input type="tel" id="phone" />
          </div>
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="sign-form__submitContainer">
            {!isLogging ? (
              <input className="buttonSubmit" type="submit" value="Sign Up" />
            ) : (
              <SubmitLoader />
            )}
          </div>
          <Link className="link" to={"/signin"}>
            Have account yet? Sign up.
          </Link>
        </form>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Signup
