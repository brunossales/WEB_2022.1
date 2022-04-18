import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CreateStudent from './components/CRUD/student/CreateStudent'
import ListStudent from './components/CRUD/student/ListStudent'
import EditStudent from './components/CRUD/student/EditStudent'
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'

function App() {

  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to="/" className='navbar-brand dropdawn-menu'>UFC</Link>
        <div className='dropdawn-menu' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='dropdawn-item'>
              <Link to="/" className='nav-link'>
                Home
              </Link>
            </li>
            <li className='navitem'>
              <Link to="About" className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" menuVariant="dark" title="Student">

                  <NavDropdown.Item href="/listStudent">List Student</NavDropdown.Item>
                  <NavDropdown.Item href="/createStudent">Create Student</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </li>

          </ul>
        </div>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='createStudent' element={<CreateStudent />} />
        <Route path='listStudent' element={<ListStudent />} />
        <Route path='editStudent/:id' element={<EditStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
      </Routes>
    </div>
  )
}

export default App
