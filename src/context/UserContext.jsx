import React, { createContext, useReducer, useContext, useEffect, useCallback } from 'react'

import { getItem, setItem } from '../services/localStorage'

const initialState = {
  theme: 'dark',
  ...getItem('user'),
}

export const TYPES = {
  SET_USER: 'SET_USER',
  UPDATE_USER: 'UPDATE_USER',
  RESET_USER: 'RESET_USER',
}

function reducer(state, action) {
  switch (action.type) {
    case TYPES.SET_USER:
      return { ...action.payload }
    case TYPES.UPDATE_USER:
      return { ...state, ...action.payload }
    case TYPES.RESET_USER:
      return {}

    default:
      return state
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const hasUser = state.username

  const setUser = useCallback((payload) => {
    dispatch({ type: TYPES.SET_USER, payload })
  }, [])

  const updateUser = useCallback((payload) => {
    dispatch({ type: TYPES.UPDATE_USER, payload })
  }, [])

  const resetUser = useCallback(() => {
    dispatch({ type: TYPES.RESET_USER })
  }, [])

  useEffect(() => {
    setItem('user', state)
  }, [state])

  return (
    <UserProviderContext.Provider value={{ state, dispatch, setUser, updateUser, resetUser, hasUser }}>
      {children}
    </UserProviderContext.Provider>
  )
}

export const useUser = () => useContext(UserProviderContext)

const UserProviderContext = createContext({})
