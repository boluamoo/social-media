import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate('/')
  }

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button
        className="bg-orange-100 p-2 rounded-md outline-none"
        onClick={() => {
          signInWithGoogle()
        }}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default Login
