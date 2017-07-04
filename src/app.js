import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import MainContainer from './component/MainContainer'

const store = configureStore()
const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
)

export default App
