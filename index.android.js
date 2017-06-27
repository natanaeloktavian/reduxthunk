import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/configureStore'
import App from './src/app'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppRegistry.registerComponent('ReduxThunk', () => ReduxApp)
