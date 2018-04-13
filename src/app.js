// MODULES
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import Index from './components/Index'

// STYLING
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import icons from '@fortawesome/fontawesome-free-solid/'
import brands from '@fortawesome/fontawesome-free-brands'


fontawesome.library.add(brands, icons)

const App = () => {
  return (
    <MuiThemeProvider>
      <Index />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
