import React, { Component } from 'react'
import Home from './SiteHome/Home'
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-180252068-1');
    ReactGA.pageview('/home');
}

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      logo: false
    }
  }

  render() {
    return (
          <div>
          {this.state.logo ?
            <div />
            :
            <Home />

          }
          </div>
    )
  }
}

export default App
