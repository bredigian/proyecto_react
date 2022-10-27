import Loading from "./Loading"
import { NavLink } from "react-router-dom"
import React from "react"
import { useState } from "react"

const Sign = () => {
  const [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 2500)
  if (loading) {
    return (
      <div className="register d-flex flex-column align-items-center w-75 p-4">
        <p className="register-title m-0">
          To start shopping, you first have to register or log in if you already
          have an account!
        </p>
        <div className="register-container d-flex align-items-center gap-5">
          <button className="register-container__button">
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/signup"}
            >
              Sign Up
            </NavLink>
          </button>
          <button className="register-container__button">
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/signin"}
            >
              Sign In
            </NavLink>
          </button>
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Sign
