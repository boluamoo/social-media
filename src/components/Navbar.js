import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const signUserOut = async () => {
    await signOut(auth)
  }

  return (
    <div className="flex gap-4 justify-end w-full items-center h-16 bg-slate-500 text-gray-50 p-[10px]">
      <div className="flex gap-4">
        <Link className="pb-1 border-b-2 border-white" to="/">
          Home
        </Link>
        <Link className="pb-1 border-b-2 border-white" to="/login">
          Login
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL} className="rounded-full size-8" />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
