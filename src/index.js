import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Container from './containers/Container'

import './styles/index.css'


const store = configureStore()

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
