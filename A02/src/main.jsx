import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Popper from 'popper.js'
//npm install jquery popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <BrowserRouter>
  <App></App>
  </BrowserRouter>,
  document.getElementById('root')
)
