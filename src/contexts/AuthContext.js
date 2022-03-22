import React, { useContext, useEffect, useState } from 'react'
import supabase from '../supabase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState()

  function signup(user_name, user_email, user_password) {
    return supabase.auth.signUp(
      {
        email: user_email,
        password: user_password
      },
      {
        data: {
          username: user_name,
        } 
      }
    )
  }

  function login(user_email, user_password) {
    return supabase.auth.signIn({
      email: user_email,
      password: user_password
    })
  }

  function logout() {
    return supabase.auth.signOut()
  }

  function resetPassword(user_email) {
    return supabase.auth.api.resetPasswordForEmail(user_email)
  }

  useEffect(() => {
    setCurrentUser(supabase.auth.user())
    const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setCurrentUser(supabase.auth.user())
      }

      if (event === 'SIGNED_OUT') {
        setCurrentUser(supabase.auth.user())
      }
    })
    setLoading(false)
    return unsubscribe
  }, [])
  
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={ value } >
      {!loading && children}
    </AuthContext.Provider>
  )
}

