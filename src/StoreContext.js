import React, { useReducer } from 'react'
import {reducer} from "./store/reducer";
import {initialState} from "./store/initialState";
import {applyMiddleware} from "./store/middleware";
import {useActions} from "./store/actions";

export const ContextApp = React.createContext()

export const StoreContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const enhancedDispatch = applyMiddleware(dispatch)
  const actions = useActions(state, enhancedDispatch)

  return (
    <ContextApp.Provider value={{ state, enhancedDispatch, actions }}>
      {children}
    </ContextApp.Provider>
  )
}
