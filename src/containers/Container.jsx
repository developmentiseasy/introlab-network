import React, { Component } from 'react'

import LoginPageContainer from './LoginPageContainer'
import MainPageContainer from './MainPageContainer'

import 'bootstrap/dist/css/bootstrap-grid.css'

export default class Container extends Component {

  chooseContainer = () => {
    // let authenticationToken = true
    let authenticationToken = false
    if (authenticationToken) {
      return <MainPageContainer />
    } else {
      return <LoginPageContainer />
    }
  }

  render() {
    return (
      this.chooseContainer()
    )
  }
}
