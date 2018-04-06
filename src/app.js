// MODULES
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import Index from './components/Index'

// STYLING
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  return (
    <MuiThemeProvider>
      <Index />
    </MuiThemeProvider>  
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
