import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from 'reducers'
import reduxPropmise from 'redux-promise'

export default ({ children, initialState={} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPropmise))
  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}
