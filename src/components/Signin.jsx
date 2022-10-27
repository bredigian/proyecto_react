import { Link, useNavigate } from "react-router-dom"
import React, { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
import Loading from "./Loading"
import SubmitLoader from "./SubmitLoader"
import { toast } from "react-toastify"
import { useState } from "react"

const Signin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const { signIn } = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLogging(true)
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    try {
      await signIn(user.email, user.password)
      toast.success("Logged successfully", {
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
    } catch {
      console.log(e.message)
      setTimeout(() => {
        setIsLogging(false)
        toast.error("Email or password incorrect", {
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
    }
  }
  setTimeout(() => {
    setLoading(true)
  }, 2500)
  if (loading) {
    return (
      <div
        className="sign d-flex flex-column align-items-center w-75 gap-4"
        onSubmit={handleSubmit}
      >
        <p className="sign-title m-0">Sign In</p>
        <form className="sign-form d-flex flex-column align-items-center p-5 gap-4">
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="sign-form__input d-flex flex-column align-items-start gap-2">
            <label htmlFor="">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="sign-form__submitContainer">
            {isLogging ? (
              <SubmitLoader />
            ) : (
              <input className="buttonSubmit" type="submit" value="Sign In" />
            )}
          </div>
          <Link className="link" to={"/signup"}>
            Don't have and account yet? Sign up.
          </Link>
        </form>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Signin
